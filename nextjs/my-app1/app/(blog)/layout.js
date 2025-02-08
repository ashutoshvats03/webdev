import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });




export default function RootLayout({ children }) {
    return (
        <>
            <nav class="bg-gray-800 py-4 min-w-full">
                <div class="container mx-auto flex justify-between items-center">
                    <a href="#" class="text-lg font-bold text-white">Blog Title</a>
                    <ul class="flex items-center space-x-4">
                        <li><a href="#" class="text-gray-300 hover:text-white">Home</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white">About</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white">Contact</a></li>
                    </ul>
                </div>
            </nav>
            {children}
        </>
    );
} 
