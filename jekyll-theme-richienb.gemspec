# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-richienb"
  spec.version       = "0.1.0"
  spec.authors       = ["Richie Bendall"]
  spec.email         = ["richiebendall@gmail.com"]

  spec.summary       = "Jekyll theme used for products created by Richie Bendall."
  spec.homepage      = "https://github.com/Richienb/jekyll-theme-richienb"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.7"

  spec.add_development_dependency "bundler", "~> 2.0"
  spec.add_development_dependency "rake", "~> 12.0"
end
