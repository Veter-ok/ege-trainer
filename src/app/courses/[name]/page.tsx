'use client'
import Header from "@/components/Header";
import Image from "next/image";
import { useParams } from "next/navigation";


export default function Courses() {
    const params = useParams()

  return (
    <div>
        <h1>{params.name}</h1>
    </div>
  );
}
