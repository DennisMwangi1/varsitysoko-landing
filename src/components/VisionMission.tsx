import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Rocket, Handshake, Users, Star } from "lucide-react";

interface VisionMissionProps {
    setShowInvestorForm: (value: boolean) => void;
    setShowDeveloperForm: (value: boolean) => void;
}
export default function VisionMission({ setShowInvestorForm, setShowDeveloperForm }: VisionMissionProps) {
    return (
        <div className="max-w-7xl mx-auto space-y-8 py-12">
            {/* Vision & Mission Section */}
            <div className="grid md:grid-cols-3 gap-6">
                <Card className="shadow-lg bg-primary-50">
                    <CardHeader>
                        <CardTitle className="text-2xl flex items-center gap-2">
                            <Rocket className="text-primary" /> Our Vision
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-600">
                            To create a trusted marketplace where every university student can easily and safely
                            trade within their campus community, fostering sustainable consumption and financial
                            independence.
                        </p>
                    </CardContent>
                </Card>
                <Card className="border-2 border-primary bg-gray-50 shadow-md">
                    <CardHeader>
                        <CardTitle className="text-xl text-center flex items-center justify-center gap-2">
                            <Star className="text-yellow-500" /> Our Motto
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-center text-lg italic text-gray-700">
                            "Supporting Student Hustles, One Sale at a Time."
                        </p>
                    </CardContent>
                </Card>
                <Card className="shadow-lg bg-primary-50">
                    <CardHeader>
                        <CardTitle className="text-2xl flex items-center gap-2">
                            <Handshake className="text-primary" /> Our Mission
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-600">
                            We aim to provide a secure and vibrant marketplace for students,
                            ensuring accessibility, affordability, and trust in every
                            transaction, while also supporting local businesses within
                            universities.
                        </p>
                    </CardContent>
                </Card>
            </div>


            {/* Call to Investors & Volunteer Developers */}
            <Alert className="border-l-4 border-primary bg-gray-100">
                <AlertTitle className="text-xl font-semibold flex items-center gap-2">
                    <Users className="text-primary" /> Join Our Mission!
                </AlertTitle>
                <AlertDescription>
                    We are looking for investors who believe in the power of student-driven
                    commerce and volunteer developers eager to contribute to an impactful
                    project.
                </AlertDescription>
                <div className="mt-4 grid md:grid-cols-2 gap-4">
                    <Button variant="default" className="px-6" onClick={() => setShowInvestorForm(true)}>Invest in VarsitySoko</Button>
                    <Button variant="outline" className="px-6" onClick={() => setShowDeveloperForm(true)}>Join as a Developer</Button>
                </div>
            </Alert>
        </div>
    );
}
