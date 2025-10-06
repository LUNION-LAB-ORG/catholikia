"use client"
import React from 'react'
import Programe from './programe'
import BibleReadingDay from './bible-reading-day'
import { useLectioList } from '@/features/lectio-divina/hooks/useLectioList';
import LoadingIndicator from '@/components/common/LoadingIndicator';

export default function CurrentLectioDivina() {
  const { lectios, meta, isError, isFetching, isLoading, error, filters, onPaginationChange } = useLectioList();

  const lectio = lectios && lectios.length > 0 ? lectios[0] : null;
  console.log(lectio);

  return isLoading ? (
    <LoadingIndicator />
  ) : (
    <>
      <Programe />
      {lectio && (
        <BibleReadingDay lectio={lectio} />
      )}
    </>
  )

}
