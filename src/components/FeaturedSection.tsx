import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/24/solid";
export default function FeaturedSection() {
  // main image
  const image: string =
    "https://images.unsplash.com/photo-1536698658763-878a02695d1c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  // --- returned section component
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              {/* title text */}
              <p className="text-base font-semibold leading-7 text-red-600">
                Sigue tus metas
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Encuentra tu verdadero yo
              </h2>
              {/* message */}
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
              {/* items */}
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {/* item */}
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <CloudArrowUpIcon className="absolute left-1 top-1 h-5 w-5 text-red-600" />
                    Todo de moper para ti.
                  </dt>
                  <dd className="inline">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </dd>
                </div>
                {/* item */}
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <LockClosedIcon className="absolute left-1 top-1 h-5 w-5 text-yellow-600" />
                    Donde la aventura encuentra el bienestar.
                  </dt>
                  <dd className="inline">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo.
                  </dd>
                </div>
                {/* item */}
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <ServerIcon className="absolute left-1 top-1 h-5 w-5 text-orange-600" />
                    Solo hazlo.
                  </dt>
                  <dd className="inline">
                    Ac tincidunt sapien vehicula erat auctor pellentesque
                    rhoncus. Et magna sit morbi lobortis.
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <img
            src={image}
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width="2432"
            height="1442"
          />
        </div>
      </div>
    </div>
  );
}
