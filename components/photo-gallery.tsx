"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Download,
  Share2,
  Eye,
  Camera,
  MapPin,
  Calendar,
  X,
} from "lucide-react";

const photos = [
  {
    id: 1,
    title: "城市夜景",
    description: "繁华都市的夜晚，灯火辉煌，车水马龙",
    image: "/api/placeholder/800/600",
    category: "城市风光",
    location: "上海外滩",
    date: "2024-01-15",
    likes: 128,
    tags: ["夜景", "城市", "建筑", "灯光"],
    camera: "Sony A7R4",
    lens: "24-70mm f/2.8",
    settings: "f/8, 1/30s, ISO 800",
  },
  {
    id: 2,
    title: "山间晨雾",
    description: "清晨时分，薄雾缭绕在山间，如诗如画",
    image: "/api/placeholder/800/600",
    category: "自然风光",
    location: "黄山",
    date: "2024-02-20",
    likes: 95,
    tags: ["晨雾", "山景", "自然", "宁静"],
    camera: "Canon EOS R5",
    lens: "70-200mm f/2.8",
    settings: "f/5.6, 1/125s, ISO 400",
  },
  {
    id: 3,
    title: "街头人文",
    description: "捕捉城市中普通人的日常生活瞬间",
    image: "/api/placeholder/800/600",
    category: "人文纪实",
    location: "北京胡同",
    date: "2024-03-10",
    likes: 156,
    tags: ["人文", "街头", "生活", "纪实"],
    camera: "Fujifilm X-T4",
    lens: "35mm f/1.4",
    settings: "f/2.8, 1/250s, ISO 200",
  },
  {
    id: 4,
    title: "花卉特写",
    description: "微距镜头下的花朵，展现生命的细腻之美",
    image: "/api/placeholder/800/600",
    category: "微距摄影",
    location: "植物园",
    date: "2024-03-25",
    likes: 89,
    tags: ["微距", "花卉", "细节", "色彩"],
    camera: "Nikon D850",
    lens: "105mm f/2.8 Macro",
    settings: "f/4, 1/200s, ISO 100",
  },
  {
    id: 5,
    title: "海边日落",
    description: "夕阳西下，海天一色，金色洒满整个海面",
    image: "/api/placeholder/800/600",
    category: "自然风光",
    location: "青岛",
    date: "2024-04-05",
    likes: 203,
    tags: ["日落", "海边", "金色", "浪漫"],
    camera: "Sony A7R4",
    lens: "16-35mm f/2.8",
    settings: "f/11, 1/60s, ISO 100",
  },
  {
    id: 6,
    title: "建筑几何",
    description: "现代建筑的几何线条，展现建筑之美",
    image: "/api/placeholder/800/600",
    category: "建筑摄影",
    location: "深圳",
    date: "2024-04-18",
    likes: 112,
    tags: ["建筑", "几何", "线条", "现代"],
    camera: "Canon EOS R5",
    lens: "14-24mm f/2.8",
    settings: "f/8, 1/500s, ISO 200",
  },
  {
    id: 7,
    title: "星空银河",
    description: "远离城市光污染，仰望璀璨星空",
    image: "/api/placeholder/800/600",
    category: "天文摄影",
    location: "内蒙古",
    date: "2024-05-02",
    likes: 267,
    tags: ["星空", "银河", "天文", "震撼"],
    camera: "Sony A7S III",
    lens: "24mm f/1.4",
    settings: "f/2.8, 20s, ISO 3200",
  },
  {
    id: 8,
    title: "雨夜霓虹",
    description: "雨夜中的霓虹灯，倒映在湿润的街道上",
    image: "/api/placeholder/800/600",
    category: "城市风光",
    location: "香港",
    date: "2024-05-15",
    likes: 178,
    tags: ["雨夜", "霓虹", "倒影", "氛围"],
    camera: "Fujifilm X-T4",
    lens: "23mm f/1.4",
    settings: "f/2.8, 1/30s, ISO 1600",
  },
];

const categories = [
  "全部",
  "城市风光",
  "自然风光",
  "人文纪实",
  "微距摄影",
  "建筑摄影",
  "天文摄影",
];

export function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState("全部");
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof photos)[0] | null>(
    null
  );
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("grid");

  const filteredPhotos =
    selectedCategory === "全部"
      ? photos
      : photos.filter((photo) => photo.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="transition-all duration-200"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* View Mode Toggle */}
        <div className="flex gap-2">
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("grid")}
          >
            网格
          </Button>
          <Button
            variant={viewMode === "masonry" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("masonry")}
          >
            瀑布流
          </Button>
        </div>
      </div>

      {/* Photos Grid */}
      <div
        className={`grid gap-6 ${
          viewMode === "grid"
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            : "columns-1 md:columns-2 lg:columns-3"
        }`}
      >
        {filteredPhotos.map((photo) => (
          <Card
            key={photo.id}
            className={`group hover:shadow-xl transition-all duration-300 overflow-hidden ${
              viewMode === "masonry" ? "break-inside-avoid mb-6" : ""
            }`}
          >
            <div className="relative overflow-hidden">
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              <div className="absolute top-4 left-4">
                <Badge variant="secondary" className="bg-white/90 text-black">
                  {photo.category}
                </Badge>
              </div>
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button
                  size="sm"
                  variant="secondary"
                  className="h-8 w-8 p-0"
                  onClick={() => setSelectedPhoto(photo)}
                >
                  <Eye className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {photo.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                {photo.description}
              </p>

              <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {photo.location}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {photo.date}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Heart className="h-4 w-4" />
                  {photo.likes}
                </div>
                <div className="flex gap-1">
                  {photo.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {photo.tags.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{photo.tags.length - 2}
                    </Badge>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Photo Detail Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50">
          <div className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 z-10 bg-black/50 text-white hover:bg-black/70"
                onClick={() => setSelectedPhoto(null)}
              >
                <X className="h-6 w-6" />
              </Button>

              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-auto rounded-lg mb-6"
              />

              <div className="bg-white dark:bg-gray-900 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">
                      {selectedPhoto.title}
                    </h2>
                    <p className="text-muted-foreground">
                      {selectedPhoto.description}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Heart className="h-4 w-4 mr-1" />
                      {selectedPhoto.likes}
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-1" />
                      下载
                    </Button>
                    <Button size="sm" variant="outline">
                      <Share2 className="h-4 w-4 mr-1" />
                      分享
                    </Button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      拍摄信息
                    </h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>
                        <strong>地点:</strong> {selectedPhoto.location}
                      </p>
                      <p>
                        <strong>日期:</strong> {selectedPhoto.date}
                      </p>
                      <p>
                        <strong>相机:</strong> {selectedPhoto.camera}
                      </p>
                      <p>
                        <strong>镜头:</strong> {selectedPhoto.lens}
                      </p>
                      <p>
                        <strong>参数:</strong> {selectedPhoto.settings}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">标签</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedPhoto.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
