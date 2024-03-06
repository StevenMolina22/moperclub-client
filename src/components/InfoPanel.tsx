import React from "react";

// message items type definition
type MessageItems = {
  title: string;
  body: string;
  icon: React.ReactElement;
};

// info panel props type definition
interface Props {
  caption: string;
  title: string;
  body: string;
  image: string;
  messages: MessageItems[];
}

export default function InfoPanel({
  caption,
  title,
  body,
  image,
  messages,
}: Props) {
  // --- returned section component
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              {/* caption text */}
              <p className="text-base font-semibold leading-7 text-red-600">
                {caption}
              </p>
              {/* title text */}
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {title}
              </h2>
              {/* body text message */}
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {body}
              </p>
              {/* items */}
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {/* items */}
                {messages.map((message, index) => (
                  <div className="relative pl-9" key={index}>
                    <dt className="inline font-semibold text-gray-900">
                      {message.icon}
                      {message.title}.
                    </dt>
                    <dd className="inline">
                      {message.body}
                    </dd>
                  </div>
                ))}
                
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
