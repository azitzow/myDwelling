puts '🌱  Seeding maintenances'

clean = Maintenance.create(name: 'Move-In', description: 'Deep clean your home', category: 'Recommended')

filters = Maintenance.create(name: 'Move-In', description: "Replace your home's filters", category: 'Required')

controls = Maintenance.create(name: 'Move-In', description: 'Find your water and electric controls', category: 'Required')

devices = Maintenance.create(name: 'Move-In', description: 'Check your safety devices', category: 'Required')

hvac = Maintenance.create(name: 'Monthly Maintenance Checklist', description: 'Check your HVAC filters', category: 'Recommended')

heater = Maintenance.create(name: 'Monthly Maintenance Checklist', description: 'Check your water heater, and flush out hot water from the water heater to remove accumulated sediment', category: 'Recommended')

puts '🌱 Done Seeding'