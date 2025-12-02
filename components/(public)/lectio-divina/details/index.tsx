"use client";
import LoadingIndicator from '@/components/common/LoadingIndicator';
import NoData from '@/components/common/no-data';
import Section from "@/components/primitives/Section";
import Title from "@/components/primitives/Title";
import {Badge} from "@/components/ui/badge";
import {useLectioDetailQuery} from "@/features/lectio-divina/queries/lectio-detail.query";
import {dateFormat} from "@/utils/date-utils";
import Image from "next/image";
import ShareButton from "@/components/common/share-button";
import {useLectioListQuery} from "@/features/lectio-divina/queries/lectio-list.query";
import {LaravelPaginatedResponse} from "@/types/api.type";
import {ILectio} from "@/features/lectio-divina/types/lectio.type";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger} from "@/components/ui/select";
import {useRouter} from "next/navigation";

export default function LectioDetailsContent({id: slug}: { id: string }) {
	const {data, isLoading, error} = useLectioDetailQuery(slug);
	const {data: lectioList} = useLectioListQuery({size: 50, page: 1});

	if (isLoading) {
		return <LoadingIndicator/>;
	}

	if (error) {
		return <div className="text-red-500">Erreur lors du chargement de l'effata.</div>;
	}

	if (!data) {
		return <NoData message="Aucune donnée disponible."/>;
	}

	return (
		<div className="grid md:grid-cols-3 mt-11 custom-container bg-white gap-10 px-4">
			<Section padding="none" className="space-y-10 md:col-span-2">
				{/* Catégorie */}
				<Badge className="bg-[#EEEEEE] text-[#333333] px-3 py-1 rounded-full text-sm font-bold whitespace-normal">
					{data.lithurgy_time}
				</Badge>
				<LectioDateSelector
					lectioSelected={data}
					lectioList={lectioList}
				/>
				<Image
					src={data.image}
					alt={"Lectio divina Image"}
					width={1035}
					height={643}
					className="rounded-lg"
				/>
				<div className="text-justify" dangerouslySetInnerHTML={{__html: data.lecture}}/>
				<div className="flex items-center w-full space-x-6">
					<ShareButton/>
				</div>
			</Section>
			<div className="col-span-1">
				<div className="sticky top-8 self-start border bg-[#F5F5F5] rounded-lg p-4">
					<div dangerouslySetInnerHTML={{__html: data.homelie}}/>
					<div className="font-bold mt-4 text-right">
						Commenté par {data.contributor.title} {data.contributor.name}
					</div>
				</div>
			</div>
		</div>
	)
}

type LectioDateSelectorProps = {
	lectioSelected?: ILectio | null;
	lectioList?: LaravelPaginatedResponse<ILectio>;
}

function LectioDateSelector({lectioSelected, lectioList}: LectioDateSelectorProps) {
	const router = useRouter();
	return (
		<>
			<Select onValueChange={(value: string) => {
				if (!value) return;
				router.push(`/lectio-divina/${value}`);
			}}>
				<SelectTrigger className="border-none ring-0 shadow-none min-h-fit">
					<Title className="text-[#0088FF] text-3xl font-bold uppercase">
						{lectioSelected ? dateFormat(lectioSelected.published_at) : 'Sélectionner une date'}
					</Title>
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						{lectioList?.data.map((lectio) => (
							<SelectItem
								value={lectio.id}
								key={lectio.id}
								className="w-full text-left"
							>
								{dateFormat(lectio.published_at)}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
		</>
	)
}