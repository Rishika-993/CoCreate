import { notFound } from 'next/navigation';

const routes = ['instagram-content', 'blog', 'twitter-content', 'tags', 'linkedin-content', 'contact', 'signin'];

export default function DynamicPage({ params }) {
  const { route } = params;
  
  if (!routes.includes(route)) {
    notFound();
  }

//   const content = route.replace('-', ' ');

  return (
    <div className="flex items-center justify-center ml-16 md:ml-56 min-h-screen">
      <div className="text-center">
        {/* <h1 className="text-6xl font-bold mb-4">
          {content.charAt(0).toUpperCase() + content.slice(1)}
        </h1> */}
        <p className="text-4xl font-bold md:text-6xl">
          Building...
        </p>
      </div>
    </div>
  );
}