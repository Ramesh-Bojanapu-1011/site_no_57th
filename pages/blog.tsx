import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type Props = {};

const blog = (props: Props) => {
  return (
    <>
      <Head>
        <title>Blog | Enkonix Theme</title>
        <meta
          name="description"
          content="Latest insights, tips, and stories from Enkonix."
        />
      </Head>
      <main className="bg-[#101624] text-white min-h-screen caret-transparent">
        <Header />
        {/* Hero Section */}
        <section className="relative h-[100vh] flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-700 to-purple-800 overflow-hidden">
          <h1 className="text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
            Welcome to Our Blog
          </h1>
          <p className="text-lg max-w-xl mx-auto mb-6 text-white/80">
            Explore the latest insights, tips, and stories in IT, cybersecurity,
            and digital transformation.
          </p>
        </section>

        {/* Featured Blogs Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-blue-950 dark:to-purple-900">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold mb-10 text-blue-700 dark:text-blue-300">
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: '5 Ways to Secure Your Business Network',
                  desc: 'Practical strategies to protect your company from cyber threats.',
                  image: '/globe.svg',
                  link: '/network-security',
                },
                {
                  title: 'Cloud Backup: Why It Matters',
                  desc: 'Discover the benefits of cloud backup and disaster recovery.',
                  image: '/window.svg',
                  link: '/cloud-backup',
                },
                {
                  title: 'Building a Culture of Security Awareness',
                  desc: 'How to empower your team to recognize and avoid cyber risks.',
                  image: '/logo-stackly.png',
                  link: '/security-awareness',
                },
              ].map((blog, idx) => (
                <Link
                  href={blog.link}
                  key={idx}
                  className="group bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl p-8 border border-blue-100 dark:border-blue-900 backdrop-blur-lg flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-blue-400 dark:hover:shadow-blue-900"
                >
                  <Image
                    src={blog.image}
                    width={80}
                    height={80}
                    alt={blog.title}
                    className="mb-4 w-20 h-20 rounded-full object-contain shadow-md"
                  />
                  <h3 className="font-bold text-xl mb-2 text-blue-700 dark:text-blue-300 group-hover:underline text-center">
                    {blog.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3 text-center text-sm">
                    {blog.desc}
                  </p>
                  <span className="inline-block mt-2 text-sm text-purple-600 dark:text-purple-300 font-semibold">
                    Read More &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* About the Blog Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-purple-100 to-blue-50 dark:from-purple-900 dark:to-blue-950">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-extrabold mb-4 text-purple-700 dark:text-purple-300">
              About Our Blog
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Our blog is dedicated to sharing expert advice, industry news, and
              practical tips to help you stay ahead in the fast-evolving world
              of technology and security.
            </p>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-blue-100 to-purple-50 dark:from-blue-900 dark:to-purple-950">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-extrabold mb-4 text-blue-700 dark:text-blue-300">
              Categories
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {[
                'Network Security',
                'Cloud Solutions',
                'IT Infrastructure',
                'Security Awareness',
                'Vulnerability Assessment',
                'Digital Transformation',
              ].map((cat, idx) => (
                <span
                  key={idx}
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-md hover:scale-105 transition-all cursor-pointer"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-blue-100 dark:from-purple-950 dark:to-blue-900">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-extrabold mb-4 text-blue-700 dark:text-blue-300">
              Stay Updated
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Subscribe to our newsletter for the latest blog updates, tips, and
              exclusive content.
            </p>
            <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="px-6 py-3 rounded-full border border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-auto"
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>

        {/* Recent Comments Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-blue-950 dark:to-purple-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-extrabold mb-4 text-purple-700 dark:text-purple-300">
              Recent Comments
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              {[
                {
                  name: 'Priya Patel',
                  comment:
                    'Loved the article on cloud backup! Very informative.',
                },
                {
                  name: 'Sarah Lee',
                  comment:
                    'The security tips are practical and easy to implement.',
                },
                {
                  name: 'Michael Chen',
                  comment:
                    'Great insights on building a security-aware culture.',
                },
                {
                  name: 'David Kim',
                  comment:
                    'Looking forward to more posts on IT infrastructure.',
                },
              ].map((cmt, idx) => (
                <div
                  key={idx}
                  className="bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg p-6 border border-purple-100 dark:border-purple-900 backdrop-blur-lg flex flex-col items-start"
                >
                  <span className="font-bold text-purple-700 dark:text-purple-300 mb-2">
                    {cmt.name}
                  </span>
                  <p className="text-gray-700 dark:text-gray-300 text-base">
                    {cmt.comment}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default blog;
