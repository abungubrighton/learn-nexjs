import Repo from "@/app/components/Repo"
import RepoDirs from "@/app/components/RepoDirs"
import Link from "next/link"
import { Suspense } from "react"

// access the dynamic (name from url) in the (Params)
const RepoPage = ({params:{name}}) => {
  return (
    <div className='card'>
        <Link href='/code/repos' className="btn btn-back">Back To Repositories</Link>
        <Suspense fallback={<div>Loading repo.....</div>}>
         <Repo name={name}/>
        </Suspense>

        <Suspense fallback={<div>Loading dirs...</div>}>
            <RepoDirs name={name}/>
        </Suspense>
    </div>
  )
}

export default RepoPage