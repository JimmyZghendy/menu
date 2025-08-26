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
  Menu,
} from "lucide-react";

// Menu data with Arabic and English
const menuData = {
  saj: [
    {
      id: 1,
      nameAr: "صاج زعتر",
      nameEn: "Zaatar Saj",
      price: 150000,
      type: "zaatar",
      vegetarian: true,
    },
    {
      id: 2,
      nameAr: "صاج جبنة",
      nameEn: "Cheese Saj",
      price: 300000,
      type: "cheese",
      vegetarian: true,
    },
    {
      id: 3,
      nameAr: "صاج جبنة وجنبون",
      nameEn: "Cheese & Ham Saj",
      price: 400000,
      type: "meat",
      vegetarian: false,
    },
    {
      id: 4,
      nameAr: "قاورما صاج ",
      nameEn: "Qawarma Saj",
      price: 500000,
      type: "meat",
      vegetarian: false,
    },
    {
      id: 5,
      nameAr: "شوكوبا صاج",
      nameEn: "Chocoba Saj",
      price: 300000,
      type: "choco",
      vegetarian: true,
    },
    {
      id: 6,
      nameAr: "رغيف / خبز",
      nameEn: "Loaf",
      price: 50000,
      type: "loaf",
      vegetarian: true,
    },
  ],
  drinks: [
    {
      id: 7,
      nameAr: "مياه صغيرة",
      nameEn: "Small Water",
      price: 50000,
      type: "cold",
      category: "water",
    },
    {
      id: 8,
      nameAr: "مياه كبيرة",
      nameEn: "Large Water",
      price: 100000,
      type: "cold",
      category: "water",
    },
    {
      id: 9,
      nameAr: "مشروبات غازية",
      nameEn: "Soft Drinks",
      price: 100000,
      type: "cold",
      category: "soda",
    },
    {
      id: 10,
      nameAr: "عصير",
      nameEn: "Juice",
      price: 100000,
      type: "cold",
      category: "juice",
    },
    {
      id: 11,
      nameAr: "قهوة",
      nameEn: "Coffee",
      price: 100000,
      type: "hot",
      category: "coffee",
    },
    {
      id: 12,
      nameAr: "شاي",
      nameEn: "Tea",
      price: 100000,
      type: "hot",
      category: "tea",
    },
    {
      id: 13,
      nameAr: "نسكافيه",
      nameEn: "Nescafe",
      price: 100000,
      type: "hot",
      category: "coffee",
    },
    {
      id: 14,
      nameAr: "بيرة",
      nameEn: "Beer",
      price: 300000,
      type: "cold",
      category: "beer",
    },
    {
      id: 15,
      nameAr: "عرق بلدي قنينة",
      nameEn: "Arak Baladi Btl",
      price: 2000000,
      type: "cold",
      category: "arak",
    },
    {
      id: 16,
      nameAr: "عرق بلدي 1/2 قنينة",
      nameEn: "Arak Baladi 1/2 Btl",
      price: 1000000,
      type: "cold",
      category: "arak",
    },
    {
      id: 17,
      nameAr: "فودكا قنينة",
      nameEn: "Vodka Btl",
      price: 3000000,
      type: "cold",
      category: "vodka",
    },
    {
      id: 18,
      nameAr: "Chivas Btl",
      nameEn: "Chivas Btl",
      price: 5000000,
      type: "cold",
      category: "chivas",
    },
    {
      id: 19,
      nameAr: "Chivas 1/2 Btl",
      nameEn: "Chivas 1/2 Btl",
      price: 2000000,
      type: "cold",
      category: "chivas",
    },
    {
      id: 20,
      nameAr: "Chivas Glass",
      nameEn: "Chivas Glass",
      price: 300000,
      type: "cold",
      category: "chivas",
    },
    {
      id: 21,
      nameAr: "Johnnie Walker Black Label Btl",
      nameEn: "Johnnie Walker Black Label Btl",
      price: 5000000,
      type: "cold",
      category: "Johnnie Walker Black Label",
    },
    {
      id: 22,
      nameAr: "Johnnie Walker Black Label 1/2 Btl",
      nameEn: "Johnnie Walker Black Label 1/2 Btl",
      price: 2000000,
      type: "cold",
      category: "Johnnie Walker Black Label",
    },
    {
      id: 23,
      nameAr: "Johnnie Walker Black Label Glass",
      nameEn: "Johnnie Walker Black Label Glass",
      price: 300000,
      type: "cold",
      category: "Johnnie Walker Black Label",
    },
  ],
  sandwiches: [
    {
      id: 24,
      nameAr: " سندويش لحمة مشوية",
      nameEn: "Grilled Meat Sandwich",
      price: 700000,
      type: "meat",
      vegetarian: false,
    },
    {
      id: 25,
      nameAr: "كفتة مشوية سندويش",
      nameEn: "Grilled Kafta Sandwich",
      price: 700000,
      type: "meat",
      vegetarian: false,
    },
    {
      id: 26,
      nameAr: " سندويش طاووق",
      nameEn: "Tawook Sandwich",
      price: 500000,
      type: "chicken",
      vegetarian: false,
    },
    {
      id: 27,
      nameAr: "قصبة نية سندويش",
      nameEn: "Kasbe Nayeh Sandwich",
      price: 800000,
      type: "meat",
      vegetarian: false,
    },
    {
      id: 28,
      nameAr: "لحمة نية سندويش",
      nameEn: "Lahmeh Nayeh Sandwich",
      price: 700000,
      type: "meat",
      vegetarian: false,
    },
    {
      id: 29,
      nameAr: "كفتة نية سندويش ",
      nameEn: "Kafta Nayeh Snadwich",
      price: 700000,
      type: "meat",
      vegetarian: false,
    },
    {
      id: 30,
      nameAr: "ثوم علبة ",
      nameEn: "Garlic",
      price: 300000,
      type: "sauce",
      vegetarian: true,
    },
    {
      id: 31,
      nameAr: " صحن طاووق",
      nameEn: "Tawook Platter",
      price: 1000000,
      type: "chicken",
      vegetarian: false,
    },
    {
      id: 32,
      nameAr: " ٢٠٠غ قصبة نية صحن",
      nameEn: "Kasbe Nayeh Platter 200g",
      price: 1000000,
      type: "meat",
      vegetarian: false,
    },
    {
      id: 33,
      nameAr: " ٢٠٠غ لحمة نية صحن",
      nameEn: "Lahmeh Nayeh Platter 200g",
      price: 1000000,
      type: "meat",
      vegetarian: false,
    },
    {
      id: 34,
      nameAr: " ٢٠٠غ كفتة نية صحن ",
      nameEn: "Kafta Nayeh Platter 200g",
      price: 800000,
      type: "meat",
      vegetarian: false,
    },
    {
      id: 35,
      nameAr: " ش عدد 1 لحمة مشوية",
      nameEn: "Grilled Meat Shish",
      price: 400000,
      type: "meat",
      vegetarian: false,
    },
    {
      id: 36,
      nameAr: "كفتة مشوية ش عدد 1",
      nameEn: "Grilled Kafta Shish",
      price: 400000,
      type: "meat",
      vegetarian: false,
    },
    {
      id: 37,
      nameAr: " ش عدد 1 طاووق",
      nameEn: "Tawook Shish",
      price: 300000,
      type: "chicken",
      vegetarian: false,
    },
    {
      id: 38,
      nameAr: "تبولة ",
      nameEn: "Tabouleh",
      price: 400000,
      type: "meza",
      vegetarian: true,
    },
    {
      id: 39,
      nameAr: "لبنة ",
      nameEn: "Labneh",
      price: 500000,
      type: "meza",
      vegetarian: true,
    },
    {
      id: 40,
      nameAr: "حمص ",
      nameEn: "Homos",
      price: 400000,
      type: "meza",
      vegetarian: true,
    },
    {
      id: 41,
      nameAr: "متبّل باثنجان ",
      nameEn: "Baba Ganoush",
      price: 400000,
      type: "meza",
      vegetarian: true,
    },
    {
      id: 42,
      nameAr: "بطاطا مقلية ",
      nameEn: "French Fries",
      price: 300000,
      type: "meza",
      vegetarian: true,
    },
    {
      id: 43,
      nameAr: "ترمس ",
      nameEn: "Termos",
      price: 150000,
      type: "meza",
      vegetarian: true,
    },
    {
      id: 44,
      nameAr: "جزر ",
      nameEn: "Carrot",
      price: 150000,
      type: "meza",
      vegetarian: true,
    },
    {
      id: 45,
      nameAr: "تشكيلة خضرة ",
      nameEn: "Vegetable Platter",
      price: 300000,
      type: "meza",
      vegetarian: true,
    },
  ],
  argileh: [
    {
      id: 46,
      nameAr: "أرجيلة ",
      nameEn: "Argileh",
      price: 800000,
      type: "mixed",
      flavor: "Legume",
    },
    {
      id: 47,
      nameAr: "أرجيلة رأس",
      nameEn: "Ra2ss Argileh",
      price: 300000,
      type: "mint",
      flavor: "Legume",
    },
  ],
  dikkan: [
    {
      id: 48,
      nameAr: "بزورات اكسترا",
      nameEn: "Nuts Extra",
      price: 300000,
      type: "salty",
      category: "snacks",
    },
    {
      id: 49,
      nameAr: "كلينكس",
      nameEn: "Kleenex",
      price: 150000,
      type: "metal",
      category: "no",
    },
    {
      id: 50,
      nameAr: "غزل البنات",
      nameEn: "Cotton Candy",
      price: 150000,
      type: "sweet",
      category: "candy",
    },
    {
      id: 51,
      nameAr: "فوشار ",
      nameEn: "Popcorn",
      price: 150000,
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
    nameEn: "Sandwiches/Meza",
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          { value: "meza", labelAr: "مازة باردة ", labelEn: "Mezza" },
        ];
      case "argileh":
        return [
          { value: "all", labelAr: "الكل", labelEn: "All" },
          //  { value: "fruit", labelAr: "فواكه", labelEn: "Fruit" },
          //  { value: "mint", labelAr: "نعناع", labelEn: "Mint" },
          // { value: "mixed", labelAr: "مكس", labelEn: "Mixed" },
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#9A1F1A] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <h1 className="text-[#D4AF37] font-bold text-lg">
                {language === "ar" ? "قائمة طعام" : "Menu"}
              </h1>
            </div>

            {/* Desktop Navigation */}
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

            {/* Mobile Navigation */}
            <div className="flex items-center space-x-2 md:hidden relative">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
                className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#9A1F1A]"
              >
                <Languages className="h-4 w-4 mr-1" />
                {language === "ar" ? "EN" : "عربي"}
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen((v) => !v)}
                className="text-white hover:text-[#D4AF37] hover:bg-transparent"
              >
                <Menu className="h-6 w-6" />
              </Button>

              {isMobileMenuOpen && (
                <div className="absolute right-0 top-10 w-[300px] bg-[#9A1F1A] border border-[#D4AF37] rounded-md shadow-lg p-6 z-50">
                  <div className="flex flex-col space-y-6">
                    <button
                      onClick={() => {
                        scrollToSection("home");
                        setIsMobileMenuOpen(false);
                      }}
                      className={`text-left text-white hover:text-[#D4AF37] transition-colors text-lg ${
                        activeSection === "home" ? "text-[#D4AF37]" : ""
                      }`}
                    >
                      {language === "ar" ? "الرئيسية" : "Home"}
                    </button>

                    <div className="space-y-4">
                      <h3 className="text-[#D4AF37] font-semibold text-lg">
                        {language === "ar" ? "الفئات" : "Categories"}
                      </h3>
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => {
                            scrollToSection(category.id);
                            setIsMobileMenuOpen(false);
                          }}
                          className={`block text-left text-white hover:text-[#D4AF37] transition-colors pl-4 ${
                            activeSection === category.id
                              ? "text-[#D4AF37]"
                              : ""
                          }`}
                        >
                          {language === "ar"
                            ? category.nameAr
                            : category.nameEn}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => {
                        scrollToSection("contact");
                        setIsMobileMenuOpen(false);
                      }}
                      className={`text-left text-white hover:text-[#D4AF37] transition-colors text-lg ${
                        activeSection === "contact" ? "text-[#D4AF37]" : ""
                      }`}
                    >
                      {language === "ar" ? "اتصل بنا" : "Contact"}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Desktop Language Button */}
            <div className="hidden md:block">
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
                {language === "ar" ? "زبدين، لبنان" : "Zebdine, Lebanon"}
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
