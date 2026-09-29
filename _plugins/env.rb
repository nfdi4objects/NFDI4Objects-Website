Jekyll::Hooks.register :site, :after_init do |site|
  site.config['zammad_token'] = ENV['ZAMMAD_TOKEN']
end