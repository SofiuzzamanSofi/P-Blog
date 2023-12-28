import AllBlog from "@/components/blog/AllBlog";
import Sidebar from "@/components/home/Sidebar";

export default function Page() {
  return (
    <div className="md:flex gap-4" >
      <Sidebar />
      <div className="md:flex-grow lg:pl-8" >
        <AllBlog />
      </div>
    </div >
  );
};