"use client";
import { Link } from "@heroui/link";
import { useTranslations } from "next-intl";
import Footer4Col from "../mvpblocks/footer-4col";

export const Footer = () => {
  const t = useTranslations("partials.footer");
  return (
    <footer className="w-full flex items-center justify-center  py-3">
     <Footer4Col />
    </footer>
  );
};
