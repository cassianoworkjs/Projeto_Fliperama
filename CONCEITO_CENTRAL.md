🎮 CONCEITO CENTRAL
Website inspirado na estética arcade/fliperama dos anos 80-90, com forte influência de jogos de luta clássicos, efeitos neon e visual retrô-futurista pixelado.

🎨 PALETA DE CORES
Cores Primárias
Laranja Arcade: #ff8800

Uso: Títulos principais, bordas de destaque, hover effects
Representa energia, ação e competitividade dos arcades
Efeito neon: box-shadow: 0 0 10px rgba(255, 136, 0, 0.5)
Rosa/Vermelho Neon: #ff3860 | #ff1744

Uso: Links hover, botões de ação, elementos interativos
Simboliza urgência e chamadas para ação
Contraste vibrante contra fundos escuros
Amarelo Dourado: #ffcc00

Uso: Líderes de ranking, elementos premium
Destaque para conquistas e posições de elite
Cores de Base/Estrutura
Preto Absoluto: #000 | #111

Backgrounds de cards e containers principais
Cinza Escuro: #1a1a1a | #1e1e1e

Fundos secundários, cards, containers
Cinza Médio: #333 | #444

Bordas, separadores, estados inativos
Cores de Texto
Branco Suave: #f0f0f0 | #fff

Texto principal de alta legibilidade
Cinza Claro: #ddd | #ccc | #aaa

Textos secundários, legendas, footer
🔤 TIPOGRAFIA
Fonte Display/Títulos
Press Start 2P (Google Fonts)

Fonte pixelada clássica de 8-bit
Uso: H1, H2, H3, logo, ranking, elementos de destaque
Características: All-caps, espaçamento largo, altamente reconhecível
Evoca: Consoles clássicos, telas CRT, arcades originais
Fonte Corpo/Conteúdo
Bangers (Google Fonts)

Fonte condensada estilo comic/arcade
Uso: Parágrafos, cards, listagens, conteúdo geral
Características: Impacto visual, alta legibilidade, energética
Evoca: Quadrinhos de ação, cartazes de torneios
Hierarquia Tipográfica

H2 (seções): 1.5rem - #ff8800 - Press Start 2P
Links nav: 1.6rem - #f0f0f0 → #ff3860 (hover)
Corpo: 1rem - #ddd - Bangers
Footer: 0.9rem - #aaa

✨ EFEITOS VISUAIS & ESTÉTICA
1. Glassmorphism/Transparências

background-color: rgba(0, 0, 0, 0.5)
backdrop-filter: blur(4px)

Headers e footers com fundo semi-transparente
Efeito de vidro fosco sobre o background

2. Efeito Neon/Glow
box-shadow: 0 0 10px rgba(255, 136, 0, 0.5)
box-shadow: 0 0 10px rgba(0, 0, 0, 0.3)

Brilho suave ao redor de elementos importantes
Intensificação no hover (0.5 → 0.8)
3. Transformações Hover

transform: scale(1.02) | scale(1.03) | scale(1.05)
transition: transform 0.2s ease

Crescimento sutil ao passar o mouse
Cards: 1.02-1.03 | Rankings: 1.05
4. Bordas & Cantos
border-radius: 8px | 10px - Cantos levemente arredondados
border: 1px | 2px solid #444 | #ff8800 - Bordas definidas
Espessura maior (2px) para elementos em destaque

Background: #1e1e1e
Borda: 1px solid #444
Border-radius: 8px
Padding: 15-20px
Shadow: 0 0 10px rgba(0,0,0,0.3)
Hover: scale(1.02-1.03)

Cards de Ranking (Destaque)


Background: #111
Borda: 2px solid #ff8800
Cor texto: #ff8800
Font: Press Start 2P
Shadow: 0 0 10px rgba(255, 136, 0, 0.5) - NEON

Botões

Primary: #ff3860 → #ff1744 (hover)
Text: #fff
Padding: 6px 12px
Border-radius: 4px
Font-weight: bold

Seções

Background: rgba(0, 0, 0, 0.7)
Border-bottom: 1px solid #333
Padding: 40px 0
Margin-bottom: 20px
Border-radius: 8px


🖼️ ASSETS & IMAGENS
Background Principal
Imagem fixa: /img/fundo.png
background-size: cover
background-attachment: fixed
Background escuro para contraste com elementos neon
Formato de Imagem
AVIF para logos de campeonatos (otimização moderna)
PNG para logos principais
📱 RESPONSIVIDADE & LAYOUT
Grid System

display: flex
flex-wrap: wrap
gap: 20px
justify-content: center

Larguras de Cards
Posts/Campeonatos: calc(33.333% - 20px)
Membros equipe: 180px
Rankings: 300-360px max-width
Podcast: max-width: 600px
🎪 ATMOSFERA & MOOD
Palavras-chave
Retrô-Futurista: Passado arcade + elementos modernos
Energético: Cores vibrantes, movimentos rápidos
Competitivo: Destaques em amarelo/dourado para líderes
Nostálgico: Fontes pixeladas, efeitos CRT
Underground: Fundo escuro, neon, cultura arcade
Referências Visuais
Telas CRT de arcades clássicos
Letreiros neon de casas de jogos japonesas
HUD de jogos de luta (Street Fighter, Mortal Kombat, Tekken)
Estética cyberpunk dark
Placares eletrônicos vintage
🔧 DIRETRIZES TÉCNICAS
Transições
Duração padrão: 0.2s | 0.3s
Easing: ease (padrão suave)
Espaçamentos
Gap entre cards: 20px
Padding de seções: 40px vertical | 20px horizontal
Margens de navegação: 55px entre itens
Estados Interativos

Default → Hover → Active
#f0f0f0 → #ff3860 → (link ativo)
scale(1) → scale(1.05)
opacity: 0 → opacity: 1


💡 PRINCÍPIOS DE DESIGN
Alto Contraste: Texto claro (#f0f0f0) sobre fundos escuros (#111)
Hierarquia Visual Clara: Cores quentes (#ff8800) para elementos importantes
Feedback Visual Imediato: Hover effects em todos os elementos clicáveis
Consistência: Mesmos padrões de cards, bordas e sombras
Performance: Transições leves, efeitos CSS puros
Acessibilidade: Tamanhos de fonte legíveis (min 0.9rem)
