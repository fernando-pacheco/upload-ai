import { FileVideo, Github, Upload, Wand2 } from 'lucide-react';
import { Button } from "./components/ui/button";
import { Separator } from './components/ui/separator';
import { Textarea } from './components/ui/textarea';
import { Label } from './components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { Slider } from './components/ui/slider';

export function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <div className="px-6 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold">upload.ai</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Desenvolvido com ❤️ no NLW da Rocketseat
          </span>
          <Separator orientation='vertical' className='h-6' />
          <Button variant='outline' size="sm" className="hover:bg-primary">
            <Github className='w-4 h-4 mr-2' />
            Github
          </Button>
        </div>
      </div>
      <main className='flex-1 p-6 gap-6 flex'>
        <div className='flex flex-col flex-1 gap-4'>
          <div className='grid grid-rows-2 gap-4 flex-1'>
            <Textarea
              placeholder='Inclua o prompt para a IA...'
              className='resize-none p-4 leading-relaxed'
            />
            <Textarea
              placeholder='Resultado gerado pela IA...'
              readOnly
              className='resize-none p-4 leading-relaxed'
            />

          </div>
          <p className='text-sm text-muted-foreground'>
            Lembre-se: você pode utilizar a variável <code className='text-primary'>{'{transcription}'}</code> no seu prompt para adicionar o conteúdo da transcrição do vídeo selecionado
          </p>
        </div>
        <aside className='w-80 space-y-4'>
          <form className='space-y-6'>
            <label
              htmlFor="video"
              className='border flex rounded-md aspect-video justify-center cursor-pointer border-dashed text-sm flex-col gap-2 items-center text-muted-foreground hover:bg-primary/30'
            >
              <FileVideo className='h-4 w-4' />
              Seleciona um vídeo
            </label>
            <input
              type="file"
              id="video"
              accept="video/mp4"
              className='sr-only'
            />
            <Separator />
            <div className='space-y-2'>
              <Label htmlFor='transcription_prompt'>Prompt de transcrição</Label>
              <Textarea
                id='transcription_prompt'
                className='min-h-20 leading-relaxed'
                placeholder='Inclua palavras-chave mencionadas no vídeo separadas por vírgula (,)'
              />
            </div>
            <Button type='submit' className='w-full hover:bg-primary/30'>
              <b>Carregar vídeo</b>
              <Upload className='w-4 h-4 ml-2' />
            </Button>
          </form>
          <Separator />
          <form className='space-y-4'>
            <div className='space-y-2'>
              <Label>Prompt</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um prompt" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title">Título do youtube</SelectItem>
                  <SelectItem value="description">Descrição do youtube</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className='space-y-2'>
              <Label>Modelo</Label>
              <Select disabled defaultValue="gpt3.5">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <span className='block text-xs text-muted-foreground italic'>Você poderá customizar essa opção em breve</span>
            </div>
            <Separator />
            <div className='space-y-4'>
              <Label>Temperatura</Label>
              <Slider
                min={0}
                max={1}
                step={0.01}
              />
              <span className='block text-xs text-muted-foreground italic'>Valores mais altos tendem a deixar o resultado mais criativo e com possíveis erros</span>
            </div>
            <Separator />
            <Button type='submit' className='w-full hover:bg-primary/30'>
              <b>Executar</b>
              <Wand2 className='w-4 h-4 ml-2' />
            </Button>
          </form>
        </aside>
      </main>
    </div>
  )
}