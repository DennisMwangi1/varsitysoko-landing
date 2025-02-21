import { User, Code, DollarSign, Lightbulb, Linkedin, Mail } from "lucide-react";

const contributors = [

    {
        name: "Stacy Kimaru",
        role: "Idea Contributor",
        contribution: "Helped shape the business model",
        icon: <User size={40} className="text-gray-500" />,
        email: "mailto:stacy.kimaru@example.com",
        linkedin: "https://www.linkedin.com/in/stacy-kimaru",
    },
];

export default function ContributorsGrid() {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-center ">Project Contributors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {contributors.map((contributor, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center p-4 border rounded-lg shadow-md bg-white"
                    >
                        {contributor.icon}
                        <h3 className="text-lg font-semibold mt-2">{contributor.name}</h3>
                        <p className="text-sm text-gray-600">{contributor.role}</p>
                        <p className="text-xs text-gray-500 text-center mt-2">
                            {contributor.contribution}
                        </p>
                        <div className="flex gap-4 mt-3">
                            <a href={contributor.email} target="_blank" rel="noopener noreferrer">
                                <Mail size={20} className="text-gray-600 hover:text-gray-800" />
                            </a>
                            <a href={contributor.linkedin} target="_blank" rel="noopener noreferrer">
                                <Linkedin size={20} className="text-gray-600 hover:text-gray-800" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
