import Link from "next/link";

async function fetchRepoContents(repoName){
    const devName = "abungubrighton"
    // wait little bit longer befor response is returned 
    await new Promise(resolve => setTimeout(resolve,3000));
    const response = await fetch(`https://api.github.com/repos/${devName}/${repoName}/contents`,
        {
            next:{
                revalidate:60, // cache response for 60 seconds , after that check for new data
            }
        }
    );
    const repoData = await  response.json();
    return repoData; 
}

const RepoDirs = async ({name}) => {
    const  contents = await  fetchRepoContents(name);
    console.log("CONTENTS",contents);
    const dirs =  contents.filter((content) => content.type === "dir");
  return (
    <>
        <h3>Directories</h3>
        <ul>
            {dirs.map((dir) =>(
                <li key={dir.path}>
                    <Link href={`/code/repos/name/${dir.path}`}> {dir.path} </Link>
                </li>
            ))}
        </ul>
    </>
  )
}

export default RepoDirs