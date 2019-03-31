# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "kisareth"
  spec.version       = "0.1.0"
  spec.authors       = ["Arun Sahadeo"]
  spec.email         = ["arunjamessahadeo@gmail.com"]

  spec.summary       = "Jekyll theme for indie game development studios."
  spec.homepage      = "https://github.com/ArunSahadeo/kisareth"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.8"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.12"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.6"

  spec.add_development_dependency "bundler", "~> 1.16"
  spec.add_development_dependency "rake", "~> 12.0"
end
