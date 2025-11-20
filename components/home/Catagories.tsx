"use client";

import category from "@/public/images/hero3.jpg";
import Image from "next/image";
import { Button } from "../ui/button";
import { SquareChevronRight } from "lucide-react";
import Link from "next/link";
const Catagories = () => {
  return (
    <section className="py-10  bg-secondary px-5 min mt-10 rounded-2xl shadow-md">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">Our Catrgories</h2>
      <div className=" grid md:grid-cols-2 gap-4">
        {Array.from({ length: 2 }).map((cat, index) => (
          <div
            key={index}
            className=" relative flex gap-4  border-2 p-2 bg-white rounded-xl shadow-xl text-secondary"
          >
            <Image
              src={category}
              alt="CAtrgory"
              className="w-full h-full object-cover"
            />
            <div className="flex flex-col gap-y-1 absolute top-12 left-6">
              <h2 className="text-2xl font-bold">Catagory {index + 1}</h2>
              <p className="w-1/2">Lorem ipsum dolor sit amet consectetur.</p>
              <div>
                <Button>
                  <Link href={"#"}>
                    <p className="flex  items-center gap-2">
                      See all Products <SquareChevronRight />
                    </p>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Catagories;
