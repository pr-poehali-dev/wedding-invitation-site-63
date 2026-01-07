import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const photos = [
    {
      url: "https://cdn.poehali.dev/projects/ebff0e54-628b-41e0-b1b8-d856e6332884/files/640fbe89-03a3-4909-8446-1fd9cba44998.jpg",
      alt: "Фото пары 1"
    },
    {
      url: "https://cdn.poehali.dev/projects/ebff0e54-628b-41e0-b1b8-d856e6332884/files/26c20596-cd8f-4426-a845-e3600459849f.jpg",
      alt: "Фото пары 2"
    },
    {
      url: "https://cdn.poehali.dev/projects/ebff0e54-628b-41e0-b1b8-d856e6332884/files/e45dc602-1f86-4445-82ca-7647a7c45691.jpg",
      alt: "Фото пары 3"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>
      
      <div className="relative">
        <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="mb-8">
              <div className="inline-block">
                <div className="text-primary text-6xl mb-4">✦</div>
              </div>
            </div>
            
            <h1 className="font-serif text-6xl md:text-8xl font-light text-foreground mb-6 tracking-wide">
              Виктория & Александр
            </h1>
            
            <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mb-8"></div>
            
            <p className="text-2xl md:text-3xl text-muted-foreground font-light mb-12">
              Приглашаем вас разделить с нами радость нашего торжества
            </p>

            <Card className="bg-card/80 backdrop-blur-sm border-primary/20 p-8 md:p-12 shadow-xl animate-scale-in">
              <div className="space-y-8">
                <div className="flex items-center justify-center gap-3 text-primary mb-6">
                  <div className="h-px w-16 bg-primary/30"></div>
                  <Icon name="Heart" size={24} className="animate-pulse" />
                  <div className="h-px w-16 bg-primary/30"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-2 text-primary mb-2">
                      <Icon name="Calendar" size={20} />
                    </div>
                    <p className="font-serif text-3xl text-foreground">12 февраля 2026</p>
                    <p className="text-muted-foreground">Четверг, 16:00</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-2 text-primary mb-2">
                      <Icon name="MapPin" size={20} />
                    </div>
                    <p className="font-serif text-2xl text-foreground">Усадьба Архангельское</p>
                    <p className="text-muted-foreground">Московская область, посёлок Архангельское</p>
                  </div>
                </div>

                <div className="pt-6">
                  <p className="text-sm text-muted-foreground italic">
                    Торжественная церемония и праздничный ужин
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-block mb-4">
                <div className="text-primary text-4xl">✦</div>
              </div>
              <h2 className="font-serif text-5xl md:text-6xl font-light text-foreground mb-4">
                Наша история
              </h2>
              <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {photos.map((photo, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden rounded-lg shadow-lg animate-scale-in hover:shadow-2xl transition-all duration-300"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="aspect-[3/4] relative">
                    <img 
                      src={photo.url} 
                      alt={photo.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute top-4 left-4 right-4">
                    <div className="w-full h-px bg-primary/0 group-hover:bg-primary/60 transition-colors duration-300"></div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="w-full h-px bg-primary/0 group-hover:bg-primary/60 transition-colors duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-b from-background to-primary/5">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-block mb-6">
              <div className="text-primary text-4xl">✦</div>
            </div>
            
            <p className="font-serif text-3xl md:text-4xl text-foreground mb-8 leading-relaxed">
              Будем рады видеть вас на нашем празднике!
            </p>
            
            <div className="flex items-center justify-center gap-3 text-primary">
              <div className="h-px w-24 bg-primary/30"></div>
              <Icon name="Heart" size={20} className="animate-pulse" />
              <div className="h-px w-24 bg-primary/30"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;