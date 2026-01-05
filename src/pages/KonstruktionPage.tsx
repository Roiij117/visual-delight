import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, X, FileIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const MAX_FILES = 10;
const MAX_SIZE_MB = 20;
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;

export default function KonstruktionPage() {
  const { toast } = useToast();
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const getTotalSize = (fileList: File[]) => {
    return fileList.reduce((acc, file) => acc + file.size, 0);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  const handleFiles = (newFiles: FileList | null) => {
    if (!newFiles) return;

    const fileArray = Array.from(newFiles);
    const currentTotal = getTotalSize(files);
    const newTotal = getTotalSize(fileArray);

    if (files.length + fileArray.length > MAX_FILES) {
      toast({
        title: "För många filer",
        description: `Maximalt ${MAX_FILES} filer tillåtna.`,
        variant: "destructive",
      });
      return;
    }

    if (currentTotal + newTotal > MAX_SIZE_BYTES) {
      toast({
        title: "Filerna är för stora",
        description: `Total maxstorlek är ${MAX_SIZE_MB}MB.`,
        variant: "destructive",
      });
      return;
    }

    setFiles((prev) => [...prev, ...fileArray]);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
    e.target.value = "";
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Förfrågan skickad!",
      description: "Vi återkommer med mer information så snart som möjligt.",
    });

    setIsSubmitting(false);
    setFiles([]);
  };

  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Konstruktion</span>
          </h1>
          <p className="text-muted-foreground">
            Har du en idé som behöver konstrueras? Ladda upp dina filer och beskriv ditt projekt så hjälper vi dig att förverkliga det.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* File Upload */}
            <div className="bg-gradient-card rounded-2xl border border-border p-8">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                  1
                </span>
                Ladda upp filer
              </h2>

              <div className="space-y-4">
                <div
                  className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all ${
                    dragOver
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/50"
                  }`}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                >
                  <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center">
                      <Upload className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        Dra och släpp eller klicka för att ladda upp
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Alla filtyper tillåtna • Max {MAX_FILES} filer • Max {MAX_SIZE_MB}MB totalt
                      </p>
                    </div>
                  </div>
                </div>

                {/* File List */}
                {files.length > 0 && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>
                        {files.length} fil{files.length !== 1 ? "er" : ""} ({formatFileSize(getTotalSize(files))})
                      </span>
                      <span>{MAX_SIZE_MB}MB max</span>
                    </div>
                    <div className="bg-secondary rounded-xl p-4 space-y-2">
                      {files.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between gap-3 p-3 bg-background rounded-lg"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <FileIcon className="w-5 h-5 text-primary flex-shrink-0" />
                            <div className="min-w-0">
                              <p className="text-sm font-medium text-foreground truncate">
                                {file.name}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {formatFileSize(file.size)}
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="p-1 hover:bg-secondary rounded transition-colors"
                          >
                            <X className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-card rounded-2xl border border-border p-8">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                  2
                </span>
                Kontaktuppgifter
              </h2>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Namn *</Label>
                    <Input
                      id="name"
                      placeholder="Ditt namn"
                      className="h-12 bg-secondary border-border"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-post *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="din@email.se"
                      className="h-12 bg-secondary border-border"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+46 70 123 45 67"
                      className="h-12 bg-secondary border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Adress</Label>
                    <Input
                      id="address"
                      placeholder="Gata, postnummer, ort"
                      className="h-12 bg-secondary border-border"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-gradient-card rounded-2xl border border-border p-8">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                  3
                </span>
                Specifikationer & Frågor
              </h2>

              <div className="space-y-2">
                <Label htmlFor="specifications">Beskriv ditt projekt</Label>
                <Textarea
                  id="specifications"
                  placeholder="Beskriv vad du vill ha konstruerat, specifikationer, mått, material eller andra önskemål..."
                  className="min-h-[150px] bg-secondary border-border resize-none"
                />
              </div>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Skickar..." : "Skicka förfrågan"}
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
