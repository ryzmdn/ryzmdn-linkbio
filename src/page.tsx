import { BriefcaseBusiness } from "lucide-react";
import Layout from "./layout";

export default function Home() {
  return (
    <Layout>
      <section className="w-full bg-transparent py-28">
        <div className="relative size-32 mx-auto rounded-full bg-foreground/5 p-2 ring-1 ring-foreground/10 ring-inset">
          <img
            src="https://avatars.githubusercontent.com/u/134961138?v=4"
            alt="Profile Picture"
            className="size-full bg-background shadow-xl ring-1 ring-foreground/10 rounded-full"
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="absolute bottom-3 right-0 size-8"
          >
            <polygon
              fill="#0ea5e9"
              points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"
            />
            <polygon
              fill="#fafaf9"
              points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"
            />
          </svg>
        </div>

        <div className="w-full text-center">
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight text-balance text-primary mt-5 mb-2">Rizky Ramadhan</h1>

          <div className="flex justify-center items-center gap-x-3 text-muted-foreground">
            <BriefcaseBusiness className="size-5" />
            <div className="w-px h-4 bg-primary/25" />
            <p>Software Engineer</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
