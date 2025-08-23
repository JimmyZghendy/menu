"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  Coffee,
  Sandwich,
  Pizza,
  Wind,
  ShoppingBag,
  Languages,
  Filter,
} from "lucide-react";

// Menu data with Arabic and English
const menuData = {
  saj: [
    {
      id: 1,
      nameAr: "صاج جبنة",
      nameEn: "Cheese Saj",
      price: 8000,
      type: "cheese",
      vegetarian: true,
    },
    {
      id: 2,
      nameAr: "صاج زعتر",
      nameEn: "Zaatar Saj",
      price: 6000,
      type: "zaatar",
      vegetarian: true,
    },
    {
      id: 3,
      nameAr: "صاج لحمة",
      nameEn: "Meat Saj",
      price: 12000,
      type: "meat",
      vegetarian: false,
    },
    {
      id: 4,
      nameAr: "صاج جبنة وزعتر",
      nameEn: "Cheese & Zaatar Saj",
      price: 9000,
      type: "mixed",
      vegetarian: true,
    },
    {
      id: 5,
      nameAr: "صاج كشك",
      nameEn: "Kashk Saj",
      price: 10000,
      type: "kashk",
      vegetarian: true,
    },
  ],
  drinks: [
    {
      id: 6,
      nameAr: "مياه",
      nameEn: "Water",
      price: 1000,
      type: "cold",
      category: "water",
    },
    {
      id: 7,
      nameAr: "كولا",
      nameEn: "Cola",
      price: 2000,
      type: "cold",
      category: "soda",
    },
    {
      id: 8,
      nameAr: "عصير برتقال",
      nameEn: "Orange Juice",
      price: 3000,
      type: "cold",
      category: "juice",
    },
    {
      id: 9,
      nameAr: "قهوة",
      nameEn: "Coffee",
      price: 2500,
      type: "hot",
      category: "coffee",
    },
    {
      id: 10,
      nameAr: "شاي",
      nameEn: "Tea",
      price: 2000,
      type: "hot",
      category: "tea",
    },
    {
      id: 11,
      nameAr: "عصير تفاح",
      nameEn: "Apple Juice",
      price: 3000,
      type: "cold",
      category: "juice",
    },
  ],
  sandwiches: [
    {
      id: 12,
      nameAr: "شاورما لحمة",
      nameEn: "Beef Shawarma",
      price: 8000,
      type: "meat",
      vegetarian: false,
    },
    {
      id: 13,
      nameAr: "شاورما دجاج",
      nameEn: "Chicken Shawarma",
      price: 7000,
      type: "chicken",
      vegetarian: false,
    },
    {
      id: 14,
      nameAr: "فلافل",
      nameEn: "Falafel",
      price: 5000,
      type: "vegetarian",
      vegetarian: true,
    },
    {
      id: 15,
      nameAr: "كفتة",
      nameEn: "Kofta",
      price: 9000,
      type: "meat",
      vegetarian: false,
    },
    {
      id: 16,
      nameAr: "تاووق",
      nameEn: "Tawook",
      price: 8500,
      type: "chicken",
      vegetarian: false,
    },
  ],
  argileh: [
    {
      id: 17,
      nameAr: "أرجيلة تفاح",
      nameEn: "Apple Argileh",
      price: 15000,
      type: "fruit",
      flavor: "apple",
    },
    {
      id: 18,
      nameAr: "أرجيلة عنب",
      nameEn: "Grape Argileh",
      price: 15000,
      type: "fruit",
      flavor: "grape",
    },
    {
      id: 19,
      nameAr: "أرجيلة نعناع",
      nameEn: "Mint Argileh",
      price: 16000,
      type: "mint",
      flavor: "mint",
    },
    {
      id: 20,
      nameAr: "أرجيلة مكس",
      nameEn: "Mixed Argileh",
      price: 18000,
      type: "mixed",
      flavor: "mixed",
    },
  ],
  dikkan: [
    {
      id: 21,
      nameAr: "شيبس",
      nameEn: "Chips",
      price: 2000,
      type: "salty",
      category: "snacks",
    },
    {
      id: 22,
      nameAr: "شوكولاتة",
      nameEn: "Chocolate",
      price: 3000,
      type: "sweet",
      category: "candy",
    },
    {
      id: 23,
      nameAr: "علكة",
      nameEn: "Gum",
      price: 1000,
      type: "sweet",
      category: "candy",
    },
    {
      id: 24,
      nameAr: "بسكويت",
      nameEn: "Biscuits",
      price: 2500,
      type: "sweet",
      category: "snacks",
    },
    {
      id: 25,
      nameAr: "مكسرات",
      nameEn: "Nuts",
      price: 4000,
      type: "salty",
      category: "snacks",
    },
  ],
};

const categories = [
  {
    id: "saj",
    nameAr: "صاج",
    nameEn: "Saj",
    icon: Pizza,
    color: "bg-[#9A1F1A]",
  },
  {
    id: "drinks",
    nameAr: "مشروبات",
    nameEn: "Drinks",
    icon: Coffee,
    color: "bg-[#6B8E23]",
  },
  {
    id: "sandwiches",
    nameAr: "سندويش",
    nameEn: "Sandwiches",
    icon: Sandwich,
    color: "bg-[#9A1F1A]",
  },
  {
    id: "argileh",
    nameAr: "أرجيلة",
    nameEn: "Argileh",
    icon: Wind,
    color: "bg-[#6B8E23]",
  },
  {
    id: "dikkan",
    nameAr: "دكان",
    nameEn: "Dikkan",
    icon: ShoppingBag,
    color: "bg-[#9A1F1A]",
  },
];

export default function ZebdineFestival() {
  const [language, setLanguage] = useState<"ar" | "en">("en");
  const [activeSection, setActiveSection] = useState("home");
  const [filters, setFilters] = useState<Record<string, string>>({});

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "saj",
        "drinks",
        "sandwiches",
        "argileh",
        "dikkan",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filter menu items
  const getFilteredItems = (categoryId: string) => {
    const items = menuData[categoryId as keyof typeof menuData] || [];
    const filter = filters[categoryId];

    if (!filter || filter === "all") return items;

    return items.filter((item) => {
      if (filter === "vegetarian") return item.vegetarian;
      if (filter === "non-vegetarian") return !item.vegetarian;
      if (filter === "hot" || filter === "cold") return item.type === filter;
      if (filter === "sweet" || filter === "salty") return item.type === filter;
      return (
        item.type === filter ||
        item.category === filter ||
        item.flavor === filter
      );
    });
  };

  // Get filter options for each category
  const getFilterOptions = (categoryId: string) => {
    switch (categoryId) {
      case "saj":
        return [
          { value: "all", labelAr: "الكل", labelEn: "All" },
          { value: "vegetarian", labelAr: "نباتي", labelEn: "Vegetarian" },
          {
            value: "non-vegetarian",
            labelAr: "غير نباتي",
            labelEn: "Non-Vegetarian",
          },
        ];
      case "drinks":
        return [
          { value: "all", labelAr: "الكل", labelEn: "All" },
          { value: "hot", labelAr: "ساخن", labelEn: "Hot" },
          { value: "cold", labelAr: "بارد", labelEn: "Cold" },
        ];
      case "sandwiches":
        return [
          { value: "all", labelAr: "الكل", labelEn: "All" },
          { value: "vegetarian", labelAr: "نباتي", labelEn: "Vegetarian" },
          { value: "meat", labelAr: "لحمة", labelEn: "Meat" },
          { value: "chicken", labelAr: "دجاج", labelEn: "Chicken" },
        ];
      case "argileh":
        return [
          { value: "all", labelAr: "الكل", labelEn: "All" },
          { value: "fruit", labelAr: "فواكه", labelEn: "Fruit" },
          { value: "mint", labelAr: "نعناع", labelEn: "Mint" },
          { value: "mixed", labelAr: "مكس", labelEn: "Mixed" },
        ];
      case "dikkan":
        return [
          { value: "all", labelAr: "الكل", labelEn: "All" },
          { value: "sweet", labelAr: "حلو", labelEn: "Sweet" },
          { value: "salty", labelAr: "مالح", labelEn: "Salty" },
        ];
      default:
        return [];
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#9A1F1A] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <h1 className="text-[#D4AF37] font-bold text-lg">
                {language === "ar"
                  ? "مهرجان زبدين ٢٠٢٥"
                  : "Festival Zebdine 2025"}
              </h1>
            </div>

            <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
              <button
                onClick={() => scrollToSection("home")}
                className={`text-white hover:text-[#D4AF37] transition-colors ${
                  activeSection === "home" ? "text-[#D4AF37]" : ""
                }`}
              >
                {language === "ar" ? "الرئيسية" : "Home"}
              </button>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-white hover:text-[#D4AF37] transition-colors">
                  {language === "ar" ? "الفئات" : "Categories"}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {categories.map((category) => (
                    <DropdownMenuItem
                      key={category.id}
                      onClick={() => scrollToSection(category.id)}
                    >
                      {language === "ar" ? category.nameAr : category.nameEn}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <button
                onClick={() => scrollToSection("contact")}
                className={`text-white hover:text-[#D4AF37] transition-colors ${
                  activeSection === "contact" ? "text-[#D4AF37]" : ""
                }`}
              >
                {language === "ar" ? "اتصل بنا" : "Contact"}
              </button>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
              className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#9A1F1A]"
            >
              <Languages className="h-4 w-4 mr-1" />
              {language === "ar" ? "EN" : "عربي"}
            </Button>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-[#9A1F1A] mb-4">
              {language === "ar"
                ? "مهرجان زبدين ٢٠٢٥"
                : "Zebdine Festival 2025"}
            </h1>
            <p className="text-xl text-[#6B8E23] mb-8">
              {language === "ar"
                ? "اكتشف أشهى المأكولات اللبنانية التقليدية"
                : "Discover the finest traditional Lebanese cuisine"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card
                  key={category.id}
                  className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => scrollToSection(category.id)}
                >
                  <CardHeader className="text-center">
                    <div
                      className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-[#9A1F1A]">
                      {language === "ar" ? category.nameAr : category.nameEn}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button
                      className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-[#9A1F1A] font-semibold"
                      onClick={(e) => {
                        e.stopPropagation();
                        scrollToSection(category.id);
                      }}
                    >
                      {language === "ar" ? "عرض العناصر" : "View Items"}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      {categories.map((category) => (
        <section key={category.id} id={category.id} className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-[#9A1F1A] mb-4 md:mb-0">
                {language === "ar" ? category.nameAr : category.nameEn}
              </h2>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-[#6B8E23] text-[#6B8E23] bg-transparent"
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    {language === "ar" ? "تصفية" : "Filter"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {getFilterOptions(category.id).map((option) => (
                    <DropdownMenuItem
                      key={option.value}
                      onClick={() =>
                        setFilters((prev) => ({
                          ...prev,
                          [category.id]: option.value,
                        }))
                      }
                    >
                      {language === "ar" ? option.labelAr : option.labelEn}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getFilteredItems(category.id).map((item) => (
                <Card
                  key={item.id}
                  className="hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#9A1F1A] text-lg">
                          {language === "ar" ? item.nameAr : item.nameEn}
                        </h3>
                        {language === "en" && (
                          <p className="text-sm text-gray-600 mt-1">
                            {item.nameAr}
                          </p>
                        )}
                        {language === "ar" && (
                          <p className="text-sm text-gray-600 mt-1">
                            {item.nameEn}
                          </p>
                        )}
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-[#D4AF37] text-[#9A1F1A] font-bold"
                      >
                        {item.price.toLocaleString()}{" "}
                        {language === "ar" ? "ل.ل" : "LBP"}
                      </Badge>
                    </div>

                    {item.vegetarian !== undefined && (
                      <Badge
                        variant={item.vegetarian ? "default" : "secondary"}
                        className={
                          item.vegetarian
                            ? "bg-[#6B8E23] text-white"
                            : "bg-gray-200 text-gray-700"
                        }
                      >
                        {language === "ar"
                          ? item.vegetarian
                            ? "نباتي"
                            : "غير نباتي"
                          : item.vegetarian
                          ? "Vegetarian"
                          : "Non-Vegetarian"}
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Footer / Contact */}
      <footer id="contact" className="bg-[#9A1F1A] text-[#D4AF37] py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {language === "ar" ? "مهرجان زبدين ٢٠٢٥" : "Zebdine Festival 2025"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                {language === "ar" ? "الموقع" : "Location"}
              </h3>
              <p className="text-lg">
                {language === "ar" ? "زبدين، لبنان" : "Zabdine, Lebanon"}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                {language === "ar" ? "للتواصل" : "Contact"}
              </h3>
              <p className="text-lg">+961 71 755 803</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                {language === "ar" ? "تابعونا" : "Follow Us"}
              </h3>
              <p className="text-lg">
                Paroise Saint Jean Baptiste Zebdine Jbeil
              </p>
            </div>
          </div>

          <div className="border-t border-[#D4AF37] pt-6">
            <p className="text-sm opacity-80">
              {language === "ar"
                ? "© ٢٠٢٥ رعية مار يوحنا المعمدان - زبدين. جميع الحقوق محفوظة."
                : "© 2025 Paroise Saint Jean Baptiste Zebdine Jbeil. All rights reserved."}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
