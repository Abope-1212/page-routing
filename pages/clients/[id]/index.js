import { useRouter } from "next/router";

export default function ClientProjects() {
  const router = useRouter();
  console.log(router.query);

  function loadProjectHandler() {
    router.push({
      pathname: "/clients/[id]/[clientproject]",
      query: { id: "wale", clientproject: "projecta" },
    });
  }
  return (
    <div>
      <h1>The Project of given client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}
