class Project
   attr_accessor :name, :description, :owner
   def initialize(name, description, owner)
      @name = name
      @description = description
      @owner = owner
      @task = []
   end
   def elevator_speech()
      "#{self.name}, #{self.description}"
   end
   def taskGiver()
      p @task
   end
   def addTask(taskItem)
      @task << taskItem
   end
   def printTasks()
      @task.each do |i|
         puts i.to_s
      end
   end
end

# project1 =Project.new('zach', 'test', 'julian')
# project1.addTask('sweep')
# project1.addTask('dust')
# project1.printTasks()


