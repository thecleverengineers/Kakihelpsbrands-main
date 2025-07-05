import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Users, Target, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import caseStudies from "@/data/casestudyData";

const iconMap = {
  TrendingUp,
  Award,
  Users,
};

const CaseStudyDetail = () => {
  const { id } = useParams();
  const caseStudy = caseStudies.find(
    (p) => String(p.id) === String(id) && p.category === "Case Study"
  );
  if (!caseStudy) return <div className="text-white p-10">Case Study Not Found</div>;

  // fallback for metrics, if your data doesn't have custom icons
  const metrics = caseStudy.metrics?.map((metric, idx) => ({
    ...metric,
    icon: iconMap[metric.label.replace(/\s/g, '')] || TrendingUp
  })) || [];

  return (
    <div className="min-h-screen w-full bg-gray-900 text-gray-100">

      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl pt-6">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-blue-900/30 text-blue-400 border-blue-800">
              Case Study
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {caseStudy.title}
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">{caseStudy.subtitle}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-gray-400">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{caseStudy.timeline}</span>
            </div>
            <div className="flex items-center">
              <Target className="w-4 h-4 mr-2" />
              <span>{caseStudy.industry}</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
              <span>{caseStudy.client}</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold mr-1">Location:</span>
              <span>{caseStudy.location}</span>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden mb-16 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              className="w-full h-full object-cover aspect-video"
            />
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl space-y-16">

          {/* Overview */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">Overview</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {caseStudy.overview}
              </p>
            </div>
          </div>

          <Separator className="bg-gray-800" />

          {/* Objectives */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">Objectives</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {caseStudy.objectives.map((obj, idx) => (
                <li key={idx} className="bg-gray-800/50 rounded-xl p-4 text-gray-300 flex items-start">
                  <span className="mr-2 mt-1 text-purple-400">•</span> {obj}
                </li>
              ))}
            </ul>
          </div>

          <Separator className="bg-gray-800" />

          {/* Brand Identity, Website, Video */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-800/30">
              <CardHeader>
                <CardTitle className="text-purple-400">Brand Identity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>{caseStudy.brandIdentity?.logo}</div>
                <div>{caseStudy.brandIdentity?.packaging}</div>
                <div>{caseStudy.brandIdentity?.visualStorytelling}</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border-blue-800/30">
              <CardHeader>
                <CardTitle className="text-blue-400">Website Development</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>{caseStudy.websiteDevelopment?.platform}</div>
                <div>{caseStudy.websiteDevelopment?.userExperience}</div>
                <div>{caseStudy.websiteDevelopment?.logisticsIntegration}</div>
                <div>{caseStudy.websiteDevelopment?.inventoryManagement}</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-800/30">
              <CardHeader>
                <CardTitle className="text-green-400">Video Production</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>{caseStudy.videoProduction?.shoots}</div>
                <div>{caseStudy.videoProduction?.digitalLaunch}</div>
              </CardContent>
            </Card>
          </div>

          <Separator className="bg-gray-800" />

          {/* Results */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">Results & Impact</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {caseStudy.result.map((r, idx) => (
                <Card key={idx} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
                  <CardContent className="py-6">{r}</CardContent>
                </Card>
              ))}
            </div>
            {metrics.length > 0 && (
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {metrics.map((metric, idx) => {
                  const Icon = metric.icon || TrendingUp;
                  return (
                    <Card key={idx} className="bg-gray-800/50 border-gray-700">
                      <CardContent className="pt-6">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="text-2xl font-bold text-white">{metric.value}</p>
                            <p className="text-sm font-medium text-gray-300">{metric.label}</p>
                            <p className="text-xs text-gray-500">{metric.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>

          {/* CTA */}
          <section className="py-12 px-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Hungry for a Brand Transformation?</h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                If you’re ready to take your brand from local favourite to national sensation, let’s talk.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Contact Us
              </Button>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;
