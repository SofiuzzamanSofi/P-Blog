import AllBlog from "@/components/blog/AllBlog";
import LeftSidebar from "@/components/home/LeftSidebar";


export default function Page() {
  return (
    <div className="md:flex gap-4" >
      <LeftSidebar />
      <div className="md:flex-grow lg:pl-8" >
        <AllBlog />
      </div>
    </div >
  );
};