import React from "react";

function About() {
  return (
    <section>
      <div class="mx-auto max-w-7xl px-4">
        <div class="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
          <div class="max-w-max rounded-full border bg-gray-50 p-1 px-3">
            <p class="text-xs font-semibold leading-normal md:text-sm">
              About the company
            </p>
          </div>
          <p class="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
            Made with love, right here in Nepal
          </p>
          <p class="max-w-4xl text-base text-gray-600 md:text-xl ml-36">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            veritatis voluptates neque itaque repudiandae sint, explicabo
            assumenda quam ratione placeat?
          </p>
        </div>
        <div class="my-8 flex flex-col gap-y-6 md:flex-row lg:justify-around">
          <div class="flex flex-col space-y-3 md:w-2/4 lg:w-1/5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-5 w-5 ms-28"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <p class="w-full text-xl font-semibold text-gray-900">
              Itahari office
            </p>
            <p class="text-sm font-medium">Sun-Fri 9am to 5pm.</p>
          </div>
        </div>
        <hr class="mt-20" />
        <div class="mt-16 flex items-center justify-around">
          <div class="space-y-6 md:w-3/4">
            <p class="text-3xl font-bold text-gray-900 md:text-4xl">
              Meet our team
            </p>
            <p class="max-w-4xl text-base text-gray-700 md:text-xl">
              Our philosophy is simple — hire a team of diverse, passionate
              people and foster a culture that empowers you to do your best
              work.
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-4 gap-y-6 border-b border-gray-300 py-12 pb-20 md:grid-cols-2 lg:grid-cols-4">
          <div class="rounded-md border">
            <img
              src="https://images.unsplash.com/photo-1544890225-2f3faec4cd60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80"
              class="h-[300px] w-full rounded-lg object-cover"
            />
            <p class="mt-6 w-full px-2 text-xl font-semibold text-gray-900">
              Sajan Limbhu
            </p>
            <p class="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
              Marketing head
            </p>
          </div>
          <div class="rounded-md border">
            <img
              src="https://images.unsplash.com/photo-1524860769472-246b6afea403?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              alt="Victória Silva"
              class="h-[300px] w-full rounded-lg object-cover"
            />
            <p class="mt-6 w-full px-2 text-xl font-semibold text-gray-900">
              Gaurab Khanal{" "}
            </p>
            <p class="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
              Back-end developer
            </p>
          </div>
          <div class="rounded-md border">
            <img
              src="https://images.unsplash.com/photo-1519575706483-221027bfbb31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
              alt="Gabrielle Fernandez"
              class="h-[300px] w-full rounded-lg object-cover"
            />
            <p class="mt-6 w-full px-2 text-xl font-semibold text-gray-900">
              Anil Adhikari
            </p>
            <p class="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
              Forntend developer
            </p>
          </div>
          <div class="rounded-md border">
            <img
              src="https://images.unsplash.com/photo-1509479200622-4503f27f12ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
              alt="Manoj Shrestha"
              class="h-[300px] w-full rounded-lg object-cover"
            />
            <p class="mt-6 w-full px-2 text-xl font-semibold text-gray-900">
              Manoj Shrestha
            </p>
            <p class="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
              Co-ordinator
            </p>
          </div>
        </div>
      </div>
      <hr class="mt-6" />
    </section>
  );
}

export default About;
