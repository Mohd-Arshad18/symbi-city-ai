import { motion } from 'framer-motion';
import { Bot, Settings, Map, Users } from 'lucide-react';
import { VitalsWidget } from './widgets/VitalsWidget';
import { EnvironmentWidget } from './widgets/EnvironmentWidget';
import { AITwinPanel } from './widgets/AITwinPanel';
import { MobilityWidget } from './widgets/MobilityWidget';
import { SocialWidget } from './widgets/SocialWidget';
import { Button } from './ui/button';
import { useDigitalTwin } from '@/stores/useDigitalTwin';

export const Dashboard = () => {
  const { twin } = useDigitalTwin();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="border-b border-border/50 bg-gradient-surface backdrop-blur-xl sticky top-0 z-50"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <Bot className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gradient-primary">
                    Symbiotic Digital City
                  </h1>
                  <p className="text-sm text-muted-foreground">2070 • New Singapore</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border/50">
                <div className="w-8 h-8 rounded-full bg-gradient-secondary flex items-center justify-center text-sm">
                  🤖
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium">{twin?.name || 'Digital You'}</p>
                  <p className="text-xs text-muted-foreground">AI Twin Active</p>
                </div>
              </div>
              
              <Button variant="outline" size="sm">
                <Map className="w-4 h-4 mr-2" />
                City View
              </Button>
              
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 py-8"
      >
        {/* Welcome Section */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gradient-primary mb-2">
              Welcome to Your Digital Life
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your AI twin is monitoring your wellness, optimizing your environment, and connecting you 
              with the symbiotic city ecosystem. Everything is designed to enhance your human experience.
            </p>
          </div>
        </motion.div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column - Main Widgets */}
          <div className="lg:col-span-8 space-y-6">
            {/* Top Row - Vitals & Environment */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <VitalsWidget />
              <EnvironmentWidget />
            </motion.div>

            {/* Bottom Row - Mobility & Social */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <MobilityWidget />
              <SocialWidget />
            </motion.div>
          </div>

          {/* Right Column - AI Twin Panel */}
          <motion.div variants={itemVariants} className="lg:col-span-4">
            <AITwinPanel />
          </motion.div>
        </div>

        {/* Quick Actions Footer */}
        <motion.div 
          variants={itemVariants}
          className="mt-8 p-6 bg-gradient-surface rounded-lg border border-border/50"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Quick Actions</h3>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-xs text-muted-foreground">All systems operational</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Button variant="outline" className="h-auto p-4 flex-col gap-2">
              <Map className="w-6 h-6" />
              <span className="text-sm">Explore City</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex-col gap-2">
              <Users className="w-6 h-6" />
              <span className="text-sm">Social Hub</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex-col gap-2">
              <Bot className="w-6 h-6" />
              <span className="text-sm">AI Settings</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex-col gap-2">
              <Settings className="w-6 h-6" />
              <span className="text-sm">Preferences</span>
            </Button>
          </div>
        </motion.div>
      </motion.main>
    </div>
  );
};