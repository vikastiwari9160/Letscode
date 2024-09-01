import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <section class="bg-gray-900 text-white py-20 h-[80vh]">
                <div class="container mx-auto px-4 py-28 text-center">
                    <h1 class="text-4xl md:text-5xl font-bold mb-4">Welcome to Let's Code</h1>
                    <p class="text-lg md:text-xl mb-8">Your ultimate destination to master coding through challenging problems.</p>
                    <Link to="/Login" class="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">Login</Link>
                </div>
            </section>

            <section class="py-12">
                <div class="container mx-auto px-4 py-10">
                    <div class="text-center mb-8">
                        <h2 class="text-3xl font-bold">Why Choose LetsCode?</h2>
                        <p class="text-gray-600">Improve your coding skills with our extensive problem library.</p>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="bg-white p-6 rounded-lg shadow-md">
                            <h3 class="text-xl font-bold mb-2">1000+ Coding Problems</h3>
                            <p class="text-gray-700">Solve a wide range of coding challenges from easy to hard.</p>
                            <img src="https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_640.jpg"></img>
                        </div>
                        <div class="bg-white p-6 rounded-lg shadow-md">
                            <h3 class="text-xl font-bold mb-2">Track Your Progress</h3>
                            <p class="text-gray-700">Monitor your improvements with detailed analytics and statistics.</p>
                            <img src="https://cdn.pixabay.com/photo/2019/05/31/09/16/business-4241788_1280.jpg"></img>
                        </div>
                        <div class="bg-white p-6 rounded-lg shadow-md">
                            <h3 class="text-xl font-bold mb-2">Join the Community</h3>
                            <p class="text-gray-700">Connect with other coders, share tips, and collaborate on problems.</p>
                            <img src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849826_640.jpg"></img>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}