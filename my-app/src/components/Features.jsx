import React from "react";
import {
  ChatBubbleBottomCenterTextIcon,
  UserGroupIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Peer-to-Peer Learning",
    description:
      "Connect with peers to learn new skills and share your expertise. Our platform makes it easy to find the right match for your learning goals.",
    icon: UserGroupIcon,
  },
  {
    name: "Real-time Chat",
    description:
      "Communicate with your peers in real-time using our built-in chat feature. Discuss projects, ask questions, and collaborate effectively.",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: "Voice & Video Calls",
    description:
      "Take your learning to the next level with high-quality voice and video calls. Conduct virtual sessions and get personalized guidance.",
    icon: VideoCameraIcon,
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Why Choose SkillMate?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our platform is designed to provide a seamless and interactive
            learning experience.
          </p>
        </div>
        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col items-center p-6 text-center bg-gray-50 rounded-lg shadow-lg">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
                <feature.icon className="w-8 h-8 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-gray-900">{feature.name}</h3>
              <p className="mt-4 text-base text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;