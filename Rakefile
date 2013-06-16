require "rubygems"
require "bundler/setup"

deploy_branch   = "gh-pages"
public_dir      = "_site"     # compiled site directory
deploy_dir      = "_deploy"   # deploy directory (for Github pages deployment)
repo_url        = "git@github.com:recarreira/learnhowtocode.in.git"

#######################
# Working with Jekyll #
#######################

desc "Generate jekyll site"
task :generate do
  puts "## Generating Site with Jekyll"
  system "jekyll build"
end

##############
# Deploying  #
##############

desc "Default deploy task"
task :deploy do
  Rake::Task[:push].execute
end

desc "Generate website and deploy"
task :gen_deploy => [:generate, :deploy] do
end

desc "copy dot files for deployment"
task :copydot, :source, :dest do |t, args|
  FileList["#{args.source}/**/.*"].exclude("**/.", "**/..", "**/.DS_Store", "**/._*").each do |file|
    cp_r file, file.gsub(/#{args.source}/, "#{args.dest}") unless File.directory?(file)
  end
end

desc "deploy public directory to github pages"
multitask :push do
  puts "## Deploying branch to Github Pages "
  (Dir["#{deploy_dir}/*"]).each { |f| rm_rf(f) }
  Rake::Task[:copydot].invoke(public_dir, deploy_dir)
  puts "\n## copying #{public_dir} to #{deploy_dir}"
  cp_r "#{public_dir}/.", deploy_dir
  cd "#{deploy_dir}" do
    system "git add ."
    system "git add -u"
    message = "Site updated at #{Time.now.utc}"
    puts "\n## Commiting: #{message}"
    system "git commit -m \"#{message}\""
    puts "\n## Pushing generated #{deploy_dir} website"
    system "git push origin #{deploy_branch} --force"
    puts "\n## Github Pages deploy complete"
  end
end

desc "Set up _deploy folder and deploy branch for Github Pages deployment"
task :setup, :repo do |t, args|
  rm_rf deploy_dir
  mkdir deploy_dir
  cd "#{deploy_dir}" do
    system "git init"
    system "echo 'Deploy setup done. Please, run rake deploy' > index.html"
    system "git add ."
    system "git commit -m \"initial commit\""
    system "git branch -m gh-pages"
    system "git remote add origin #{repo_url}"
  end
  puts "\n---\n## Now you can deploy with `rake deploy` ##"
end

