async function page({ params }) {
    console.log(params);
    const { id } = await params;
    console.log(id);
    
  return (
    <div>
      this is user number-{id}
    </div>
  )
}

export default page
