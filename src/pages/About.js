import { Link } from "react-router-dom";

export default function () {
    return (
        <section class="bg-gray-100 py-12 h-[90vh]">
            <div class="container mx-auto px-6">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold text-gray-800 mb-4">About LetsCode</h2>
                    <p class="text-lg text-gray-600">
                        Empowering the next generation of developers with hands-on coding experience.
                    </p>
                </div>
                <div class="flex flex-col md:flex-row items-center">
                    <div class="md:w-1/2 mb-8 md:mb-0">
                        <img src="	https://cdn.pixabay.com/photo/2023/08/09/19/47/ai-generated-8180209_640.jpg" alt="LetsCode" class="w-full h-auto rounded-lg shadow-lg"></img>
                    </div>
                    <div class="md:w-1/2 md:pl-12">
                        <p class="text-lg text-gray-700 mb-6">
                            At LetsCode, we believe that coding is more than just a skill—it's a pathway to innovation, creativity, and problem-solving. Whether you’re a beginner or an experienced programmer, our platform offers a comprehensive range of resources, from tutorials and challenges to community-driven projects, designed to help you grow and succeed in your coding journey.
                        </p>
                        <p class="text-lg text-gray-700 mb-6">
                            Our mission is to create a welcoming and supportive environment where aspiring developers can learn, collaborate, and turn their ideas into reality. With LetsCode, you’re not just learning to code—you’re becoming part of a vibrant community dedicated to pushing the boundaries of technology.
                        </p>
                        <Link to="/LeaderBoard" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg shadow-lg hover:bg-blue-700 transition duration-300">
                            Show LeaderBoard
                        </Link>
                    </div>
                </div>
            </div>
        </section>

    )
}