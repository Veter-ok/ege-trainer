'use client'
import Header from "@/components/Header";
import Image from "next/image";
import { useParams } from "next/navigation";


export default function Courses() {
    const params = useParams()

  return (
    <div>
        <p className="text-2xl text-center">{params.name}</p>
    </div>
  );
}
