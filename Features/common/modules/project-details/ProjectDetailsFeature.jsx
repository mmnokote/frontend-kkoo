"use client";
export const ProjectDetailFeature = () => {
  return (
    <section class="">
      <div class="container px-6 py-10 mx-auto">
        <div className="mb-10">
          <h1 class="text-4xl font-black text-gray-800 capitalize lg:text-3xl ">
            Project Name <br /> Activities and{" "}
            <span class="">project report</span>
          </h1>
        </div>

        <div class="lg:flex lg:-mx-6">
          <div class="lg:w-3/4 lg:px-6">
            <img
              class="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
              src="/images/projects/06.jpg?auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
          </div>

          <div class="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
            <div>
              <h3 class="text-blue-500 font-extrabold capitalize">
                Sample Report
              </h3>
              <a
                href="#"
                class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                fugiat ducimus magni.
              </a>
            </div>

            <hr class="my-3 border-gray-200 " />

            <div>
              <h3 class="text-blue-500 font-extrabold capitalize">
                Sample News
              </h3>

              <a
                href="#"
                class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                dolores tenetur quia.
              </a>
            </div>

            <hr class="my-3 border-gray-200 " />

            <div>
              <h3 class="text-blue-500 font-extrabold capitalize">
                Sample Report
              </h3>

              <a
                href="#"
                class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eveniet perferendis ipsa illum!
              </a>
            </div>

            <hr class="my-3 border-gray-200 " />

            <div>
              <h3 class="text-blue-500 font-extrabold capitalize">
                Sample Report
              </h3>

              <a
                href="#"
                class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem,
                cumque!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
