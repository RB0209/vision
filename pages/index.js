import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Head>
        <title>NIYATI ~ Feed The Need</title>
        <meta name="description" content="CARE Foundation - NIYATI Initiative" />
      </Head>

      <header className="text-center p-10 bg-brand/20 backdrop-blur-md">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-brand"
        >
          NIYATI ~ Feed The Need
        </motion.h1>
        <p className="mt-4 text-lg text-gray-300">An initiative by CARE Foundation</p>
      </header>

      <main className="p-6 space-y-20">
        <section>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl font-semibold text-brand mb-2">About the Initiative</h2>
            <p className="text-gray-300">
              NIYATI is a humanitarian project focused on feeding underprivileged communities and bringing awareness to food security challenges in our society.
            </p>
          </motion.div>
        </section>

        <section>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl font-semibold text-brand mb-2">Impact</h2>
            <p className="text-gray-300">
              Over 10,000 meals served. Multiple drives in urban and rural zones. Every donation brings real change.
            </p>
          </motion.div>
        </section>

        <section>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl font-semibold text-brand mb-2">How to Support</h2>
            <p className="text-gray-300">
              Volunteer, donate, or partner with us. Your support powers this mission.
            </p>
          </motion.div>
        </section>

        <section className="text-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="inline-block bg-brand text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition"
          >
            Donate Now
          </motion.a>
        </section>
      </main>

      <footer className="p-6 text-center text-gray-400 text-sm">
        &copy; 2025 CARE Foundation. All rights reserved.
      </footer>
    </div>
  );
}