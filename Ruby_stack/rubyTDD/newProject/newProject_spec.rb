require_relative 'newProject'
RSpec.describe Project do
   before(:each) do
      # updated this block to create two projects
      @project1 = Project.new('Project 1', 'description 1', "John")
      @project2 = Project.new('Project 2', 'description 2', "Bsrad")
   end
   # it 'has a getter and setter for name attribute' do
   #    @project1.name = "Changed Name"
   #    expect(@project1.name).to eq("Changed Name")
   # end
   it 'has a method elevator_speech to explain name and description' do
      expect(@project1.elevator_speech).to eq("Project 1, description 1")
      expect(@project2.elevator_speech).to eq("Project 2, description 2")
   end
   it 'Owners name' do
      expect(@project1.owner).to eq("John")
      expect(@project2.owner).to eq("Bsrad")
   end
   it 'Tasks for each project' do
      expect(@project1.taskGiver()).to eq([])
      expect(@project2.taskGiver()).to eq([])
   end
   it 'Add new tasks' do
      expect(@project1.addTask('Sweep')).to eq(['Sweep'])
      expect(@project2.addTask('Sweep')).to eq(['Sweep'])
   end
   it 'print tasks' do
      @project1.addTask('Sweep')
      @project1.addTask('Dust')
      expect(@project1.printTasks()).to eq(['Sweep', 'Dust'])
   end
end