import React from 'react'
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import Link from "next/link";

const page = () => {
  return (
    <div className= "flex jusify-center items-center h-10 ">

      <Button variant={"secondary"} size={"sm"}>Click me</Button>


      <Button variant={"developer"} size={"lg"}>
        <Link href="https://github.com/panaverse"></Link> Click me</Button>


        <Button variant={"developer"}  size={"lg"} asChild>
        <a href={"https://github.com/panaverse"}>Click me</a>
      </Button>


      <Button variant={"developer"} className="bg-purple-500">Click me</Button>


      <Button>
      <Mail className="mr-2 h-4 w-4" /> Login with Email
    </Button>
    </div>
  )
}

export default page