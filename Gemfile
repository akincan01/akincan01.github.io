source 'https://rubygems.org'

# Jekyll core
gem 'jekyll', '~> 4.3'

# Essential gems for Ruby 3.4+ compatibility
gem 'webrick', '~> 1.8'
gem 'csv', '~> 3.2'
gem 'base64', '~> 0.2'

# Core Jekyll plugins (matching your _config.yml)
group :jekyll_plugins do
  gem 'jekyll-archives', '~> 2.2'  # Fixed: changed from jekyll-archives-v2
  gem 'jekyll-email-protect', '~> 1.1'
  gem 'jekyll-feed', '~> 0.17'  # Added back - needed by theme
  gem 'jekyll-get-json', '~> 1.0'
  gem 'jekyll-imagemagick', '~> 1.4'
  gem 'jekyll-jupyter-notebook', '~> 0.0.5'
  gem 'jekyll-link-attributes', '~> 1.0'
  gem 'jekyll-minifier', '~> 0.1'
  gem 'jekyll-paginate-v2', '~> 3.0'
  gem 'jekyll-regex-replace', '~> 1.1'
  gem 'jekyll-scholar', '~> 7.0'
  gem 'jekyll-sitemap', '~> 1.4'
  gem 'jekyll-tabs', '~> 1.2'
  gem 'jekyll-terser', git: "https://github.com/RobertoJBeltran/jekyll-terser.git"
  gem 'jekyll-toc', '~> 0.18'
  gem 'jekyll-twitter-plugin', '~> 2.1'
  gem 'jemoji', '~> 0.12'
  
  # Content categorization
  gem 'classifier-reborn', '~> 2.3'
end

# Development and build dependencies
group :development, :build do
  gem 'css_parser', '~> 1.14'
  gem 'feedjira', '~> 3.2'
  gem 'httparty', '~> 0.21'
  gem 'observer', '~> 0.1'  # Required by jekyll-scholar
  gem 'ostruct', '~> 0.5'   # Required by jekyll-twitter-plugin
  gem 'unicode_utils', '~> 1.4'
  
  # Build optimization
  gem 'terser', '~> 1.1'
  
  # Image processing (optional but recommended)
  gem 'mini_magick', '~> 4.12'
end

# Platform-specific gems
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem 'tzinfo', '>= 1', '< 3'
  gem 'tzinfo-data'
end

# Performance-booster for watching directories on Windows
gem 'wdm', '~> 0.1', :platforms => [:mingw, :x64_mingw, :mswin]

# Lock file format
gem 'bundler', '~> 2.4'