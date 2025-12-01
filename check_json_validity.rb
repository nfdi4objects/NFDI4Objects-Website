# check_json_validity.rb
require "json"

def validate_json(file)
  begin
    JSON.parse(File.read(file))
    puts "#{file} ist gültiges JSON"
  rescue JSON::ParserError => e
    puts "#{file} enthält einen JSON-Fehler:"
    puts e.message
    exit(1)
  end
end

files = ["_site/search.json", "_site/en/search.json"]

files.each do |file|
  if File.exist?(file)
    validate_json(file)
  else
    puts "Datei fehlt: #{file}"
    exit(1)
  end
end
