"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineItem {
    id: number;
    title: string;
    date: string;
    content: string;
    category: string;
    icon: React.ElementType;
    relatedIds: number[];
    status: "completed" | "in-progress" | "pending";
    energy: number;
    link?: string;
}

interface RadialOrbitalTimelineProps {
    timelineData: TimelineItem[];
    setPage?: (page: 'home' | 'services' | 'work' | 'virtual' | 'laws' | 'about' | 'contact') => void;
}

export default function RadialOrbitalTimeline({
    timelineData,
    setPage,
}: RadialOrbitalTimelineProps) {
    const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
        {}
    );
    const viewMode = "orbital";
    const [rotationAngle, setRotationAngle] = useState<number>(0);
    const [autoRotate, setAutoRotate] = useState<boolean>(true);
    const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
    const centerOffset = { x: 0, y: 0 };
    const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const orbitRef = useRef<HTMLDivElement>(null);
    const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

    const handleMouseEnter = (id: number) => {
        setExpandedItems({ [id]: true });
        setActiveNodeId(id);
        setAutoRotate(false);
        setPulseEffect({ [id]: true });
    };

    const handleMouseLeave = () => {
        setExpandedItems({});
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
    };

    useEffect(() => {
        let animationFrameId: number;
        let lastTime = performance.now();

        const animate = (time: number) => {
            if (autoRotate && viewMode === "orbital") {
                const deltaTime = time - lastTime;
                setRotationAngle((prev) => {
                    // Smooth 15 degrees per second rotation
                    return (prev + deltaTime * 0.015) % 360;
                });
            }
            lastTime = time;
            animationFrameId = requestAnimationFrame(animate);
        };

        if (autoRotate && viewMode === "orbital") {
            animationFrameId = requestAnimationFrame(animate);
        }

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [autoRotate, viewMode]);

    const calculateNodePosition = (index: number, total: number) => {
        const angle = ((index / total) * 360 + rotationAngle) % 360;
        const radius = 200;
        const radian = (angle * Math.PI) / 180;

        const x = radius * Math.cos(radian) + centerOffset.x;
        const y = radius * Math.sin(radian) + centerOffset.y;

        const zIndex = Math.round(100 + 50 * Math.cos(radian));
        const opacity = Math.max(
            0.4,
            Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))
        );

        return { x, y, angle, zIndex, opacity };
    };

    const getRelatedItems = (itemId: number): number[] => {
        const currentItem = timelineData.find((item) => item.id === itemId);
        return currentItem ? currentItem.relatedIds : [];
    };

    const isRelatedToActive = (itemId: number): boolean => {
        if (!activeNodeId) return false;
        const relatedItems = getRelatedItems(activeNodeId);
        return relatedItems.includes(itemId);
    };

    const getStatusStyles = (status: TimelineItem["status"]): string => {
        switch (status) {
            case "completed":
                return "text-white bg-black border-white";
            case "in-progress":
                return "text-black bg-white border-black";
            case "pending":
                return "text-white bg-black/40 border-white/50";
            default:
                return "text-white bg-black/40 border-white/50";
        }
    };

    return (
        <div
            className="w-full flex-col flex items-center justify-center relative"
            style={{ minHeight: '600px', padding: '60px 0' }}
            ref={containerRef}
        >
            <div className="relative w-full max-w-4xl h-[500px] flex items-center justify-center">
                <div
                    className="absolute w-full h-full flex items-center justify-center"
                    ref={orbitRef}
                    style={{
                        perspective: "1000px",
                        transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
                    }}
                >
                    <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 via-blue-400 to-cyan-400 animate-pulse flex items-center justify-center z-10 shadow-[0_0_30px_rgba(59,130,246,0.6)]">
                        <div className="absolute w-20 h-20 rounded-full border border-blue-400/30 animate-ping opacity-70"></div>
                        <div
                            className="absolute w-24 h-24 rounded-full border border-blue-500/20 animate-ping opacity-50"
                            style={{ animationDelay: "0.5s" }}
                        ></div>
                        <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md"></div>
                    </div>

                    <div className="absolute w-[400px] h-[400px] rounded-full border border-white/10"></div>
                    <div className="absolute w-64 h-64 rounded-full border border-white/5 border-dashed pointer-events-none"></div>

                    {timelineData.map((item, index) => {
                        const position = calculateNodePosition(index, timelineData.length);
                        const isExpanded = expandedItems[item.id];
                        const isRelated = isRelatedToActive(item.id);
                        const isPulsing = pulseEffect[item.id];
                        const Icon = item.icon;

                        const nodeStyle = {
                            transform: `translate(${position.x}px, ${position.y}px)`,
                            zIndex: isExpanded ? 200 : position.zIndex,
                            opacity: isExpanded ? 1 : position.opacity,
                        };

                        return (
                            <div
                                key={item.id}
                                ref={(el) => { nodeRefs.current[item.id] = el; }}
                                className="absolute transition-all duration-300 cursor-pointer"
                                style={nodeStyle}
                                onMouseEnter={() => handleMouseEnter(item.id)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div
                                    className={`absolute rounded-full -inset-1 ${isPulsing ? "animate-pulse duration-1000" : ""
                                        }`}
                                    style={{
                                        background: `radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(59,130,246,0) 70%)`,
                                        width: `${item.energy * 0.5 + 40}px`,
                                        height: `${item.energy * 0.5 + 40}px`,
                                        left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                                        top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                                    }}
                                ></div>

                                <div
                                    className={`
                  w-12 h-12 rounded-[14px] flex items-center justify-center hover:shadow-[0_0_15px_rgba(59,130,246,0.8)] hover:border-blue-400 hover:text-blue-400
                  ${isExpanded
                                            ? "bg-blue-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.8)]"
                                            : isRelated
                                                ? "bg-white/10 text-white"
                                                : "bg-black/60 backdrop-blur-md text-white"
                                        }
                  border border-white/20
                  ${isExpanded
                                            ? "border-blue-400 shadow-lg shadow-blue-500/30"
                                            : isRelated
                                                ? "border-white animate-pulse"
                                                : "border-white/20"
                                        }
                  transition-all duration-300 transform
                  ${isExpanded ? "scale-110" : ""}
                `}
                                >
                                    <Icon size={22} strokeWidth={1} />
                                </div>

                                <div
                                    className={`
                  absolute top-14 left-1/2 -translate-x-1/2 whitespace-nowrap
                  text-[11px] font-semibold tracking-wider
                  transition-all duration-300
                  ${isExpanded ? "text-white scale-110" : "text-white/70"}
                `}
                                >
                                    {item.title}
                                </div>

                                {isExpanded && (
                                    <Card className="absolute top-16 left-1/2 -translate-x-1/2 w-72 bg-black/95 backdrop-blur-xl border border-white/20 shadow-2xl shadow-blue-900/30 overflow-hidden"
                                        style={{ borderTop: '2px solid #3b82f6' }}
                                    >
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-blue-500/50"></div>
                                        <CardHeader className="pb-2">
                                            <div className="flex justify-between items-center mb-1">
                                                <Badge
                                                    className={`px-2 text-[10px] ${getStatusStyles(
                                                        item.status
                                                    )}`}
                                                    style={{
                                                        background: 'rgba(59, 130, 246, 0.15)',
                                                        color: '#60a5fa',
                                                        borderColor: 'rgba(59, 130, 246, 0.3)'
                                                    }}
                                                >
                                                    {item.category}
                                                </Badge>
                                            </div>
                                            <CardTitle className="text-lg font-bold text-white">
                                                {item.title}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="text-sm text-gray-300">
                                            <p className="mb-4 leading-relaxed">{item.content}</p>

                                            <Button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    if (item.link && setPage) {
                                                        setPage('services');
                                                    }
                                                }}
                                                className="w-full bg-blue-600 hover:bg-blue-500 text-white border-0 shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all"
                                            >
                                                <span className="flex items-center gap-2">View Pricing <ArrowRight size={14} /></span>
                                            </Button>

                                        </CardContent>
                                    </Card>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
