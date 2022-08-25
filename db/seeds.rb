puts '🌱  Seeding categories'

inspections = Category.create(title: 'Inspections')
move_in = Category.create(title: 'Move-In')
monthly_maintenance = Category.create(title: 'Monthly Maintenance Checklist')
fall_exterior = Category.create(title: 'Fall Exterior Home Maintenance')
fall_interior = Category.create(title: 'Fall Interior Home Maintenance')
winter_exterior = Category.create(title: 'Winter Exterior Maintenance Checklist')
winter_interior = Category.create(title: 'Winter Interior Maintenance Checklist')
spring_exterior = Category.create(title: 'Spring Exterior Maintenance Checklist')
spring_interior = Category.create(title: 'Spring Interior Maintenance Checklist')
summer_exterior = Category.create(title: 'Summer Exterior Maintenance Checklist')
summer_interior = Category.create(title: 'Summer Interior Maintenance Checklist')

puts '🌱  Seeding maintenances'

clean = Maintenance.create(name: 'Deep clean your home', category_id: move_in.id, user_id: nil, estimated_cost: 350)

filters = Maintenance.create(name: "Replace your home's filters", category_id: move_in.id, user_id: nil, estimated_cost: 50)

controls = Maintenance.create(name: 'Find your water and electric controls', category_id: move_in.id, user_id: nil, estimated_cost: 0)

devices = Maintenance.create(name:'Check your safety devices', category_id: move_in.id, user_id: nil, estimated_cost: 0)

hvac = Maintenance.create(name: 'Check your HVAC filters', category_id: monthly_maintenance.id, user_id: nil, estimated_cost: 0)

heater = Maintenance.create(name:'Check your water heater, and flush out hot water from the water heater to remove accumulated sediment', category_id: monthly_maintenance.id, estimated_cost: 0)

tub_sink = Maintenance.create(name: 'Inspect tub and sink drains for debris; unclog if necessary', category_id: monthly_maintenance.id, user_id: nil, estimated_cost: 0)

garbage_disposal = Maintenance.create(name: 'Clean garbage disposal by grinding ice cubes, then flushing with hot water and baking soda', category_id: monthly_maintenance.id, user_id: nil, estimated_cost: 0)

safety_devices = Maintenance.create(name:'Test your home’s safety devices smoke alarms, carbon monoxide detectors, fire extinguishers, and all ground-fault circuit interrupters', category_id: monthly_maintenance.id, user_id: nil, estimated_cost: 0)

vents = Maintenance.create( name: 'Inspect and clean vents and heat registers', category_id: monthly_maintenance.id, user_id: nil, estimated_cost: 0)

outside_vents = Maintenance.create(name: 'Check that indoor and outdoor air vents are not blocked', category_id: monthly_maintenance.id, user_id: nil, estimated_cost: 0)

faucets = Maintenance.create(name: 'Clean faucet aerators and shower heads to remove mineral deposits.', category_id: monthly_maintenance.id, user_id: nil, estimated_cost: 0)

rake = Maintenance.create(name: 'Rake leaves and yard debris', category_id: fall_exterior.id, user_id: nil, estimated_cost: 0)

roof = Maintenance.create(name: 'Clean and inspect your roof and gutters', category_id: fall_exterior.id, user_id: nil)

sprinkles = Maintenance.create(name: 'Shut off exterior sprinkles and valves', category_id: fall_exterior.id, user_id: nil, estimated_cost: 0)

pool = Maintenance.create(name: 'Close down your pool', category_id: fall_exterior.id, user_id: nil, estimated_cost: 0)

trim = Maintenance.create(name: 'Touch up siding and trim with paint', category_id: fall_exterior.id, user_id: nil, estimated_cost: 5)

walk_way = Maintenance.create(name: 'Mend cracks and gaps in the driveway and walkway if needed.', category_id: fall_exterior.id, user_id: nil, estimated_cost: 50)

plumbing = Maintenance.create(name: 'Drain and winterize exterior plumbing', category_id: fall_exterior.id, user_id: nil, estimated_cost: 0)

heating_system = Maintenance.create(name: 'Inspect your home’s heating system inspected by a professional. Schedule an inspection in late summer or early fall before the heating season begins.', category_id: fall_interior.id, user_id: nil, estimated_cost: 89)

windows = Maintenance.create(name: 'Inspect and insulate windows and doors', category_id: fall_interior.id, user_id: nil, estimated_cost: 0)

vent = Maintenance.create(name: 'Clean your dryer vent', category_id: fall_interior.id, user_id: nil, estimated_cost: 0)

fireplace = Maintenance.create(name: 'Clean and inspect your fireplace', category_id: fall_interior.id, user_id: nil, estimated_cost: 0)

cracks_gaps = Maintenance.create(name: 'Seal cracks and gaps in windows and doors with caulk or weather stripping; replace if necessary.', category_id: fall_interior.id, user_id: nil, estimated_cost: 35)

appliances = Maintenance.create(name: 'Tune up major home appliances before the holidays.', category_id: fall_interior.id, user_id: nil, estimated_cost: 50)

siding = Maintenance.create(name: 'Replace and repair siding', category_id: fall_interior.id, user_id: nil, estimated_cost: 350)

smoke_detectors = Maintenance.create(name: 'Replace the batteries in smoke and carbon monoxide detectors. Install a smoke detector on every floor of your home, including the basement.', category_id: fall_interior.id, user_id: nil, estimated_cost: 100)

carpets = Maintenance.create(name: 'Clean the carpets', category_id: fall_interior.id, user_id: nil, estimated_cost: 50)

air_conditions = Maintenance.create(name: 'Cover your air conditioner', category_id: winter_exterior.id, user_id: nil, estimated_cost: 0)

plants = Maintenance.create(name: 'Cover plants that are at risk of freezing', category_id: winter_exterior.id, user_id: nil, estimated_cost: 0)

furniture = Maintenance.create(name: 'Cover outside furniture', category_id: winter_exterior.id, user_id: nil, estimated_cost: 0)

pipes = Maintenance.create(name: 'Insulate your pipes', category_id: winter_interior.id, user_id: nil, estimated_cost: 25)

drains = Maintenance.create(name: 'Clean your drains', category_id: winter_interior.id, user_id: nil, estimated_cost: 0)

hardware = Maintenance.create(name: 'Inspect and tighten hardware', category_id: winter_interior.id, user_id: nil, estimated_cost: 0)

fans = Maintenance.create(name: 'Reverse your ceiling fans', category_id: winter_interior.id, user_id: nil, estimated_cost: 0)

inspect_roof = Maintenance.create(name: 'Inspect the roof for damage', category_id: spring_exterior.id, user_id: nil, estimated_cost: 0)

flower_bed = Maintenance.create(name: 'Clear yard and mulch flower beds', category_id: spring_exterior.id, user_id: nil, estimated_cost: 0)

garden = Maintenance.create(name: 'Prepare your lawn and garden', category_id: spring_exterior.id, user_id: nil, estimated_cost: 0)

lawnmower = Maintenance.create(name: 'Tune up lawnmower', category_id: spring_exterior.id, user_id: nil, estimated_cost: 225)

driveway = Maintenance.create(name: 'Repair your driveway and sidewalk', category_id: spring_exterior.id, user_id: nil, estimated_cost: 150)

gutters = Maintenance.create(name: 'Clean the gutters', category_id: spring_exterior.id, user_id: nil, estimated_cost: 0)

deep_clean = Maintenance.create(name: 'Deep clean home’s exterior', category_id: spring_exterior.id, user_id: nil, estimated_cost: 33)

deck = Maintenance.create(name: 'Refinish the deck and patio', category_id: spring_exterior.id, user_id: nil)

patio = Maintenance.create(name: 'Uncover patio furniture, clean, and check if there are any repairs needed', category_id: spring_exterior.id, user_id: nil, estimated_cost: 0)

water_features = Maintenance.create(name: 'Turn on exterior water features and sprinkles', category_id: spring_exterior.id, user_id: nil, estimated_cost: 0)

heater_service = Maintenance.create(name: 'Have your HVAC serviced', category_id: spring_interior.id, user_id: nil, estimated_cost: 89)

caulking = Maintenance.create(name: 'Inspect and repair caulking', category_id: spring_interior.id, user_id: nil, estimated_cost: 15)

spring_cleaning = Maintenance.create(name: 'Start spring cleaning', category_id: spring_interior.id, user_id: nil, estimated_cost: 0)

repair_sprinklers = Maintenance.create(name: 'Inspect and repair your sprinklers', category_id: summer_exterior.id, user_id: nil, estimated_cost: 200)

insects = Maintenance.create(name: 'Prevent insects from entering your home', category_id: summer_exterior.id, user_id: nil, estimated_cost: 50)

open_pool = Maintenance.create(name: 'Clean and open your pool', category_id: summer_exterior.id, user_id: nil, estimated_cost: 150)

trees_shrubs = Maintenance.create(name: 'Prune trees and shrubs', category_id: summer_exterior.id, user_id: nil, estimated_cost: 0)

garage_door = Maintenance.create(name: 'Oil garage door opener and chain, garage door, and all door hinges', category_id: summer_exterior.id, user_id: nil, estimated_cost: 10)

garage = Maintenance.create(name: 'Clean garage', category_id: summer_interior.id, user_id: nil, estimated_cost: 30)

ceiling = Maintenance.create(name: 'Reverse your ceiling fan', category_id: summer_interior.id, user_id: nil, estimated_cost: 0)

basement = Maintenance.create(name: 'Inspect your basement', category_id: summer_interior.id, user_id: nil, estimated_cost: 0)

kitchen = Maintenance.create(name: 'Clean your kitchen exhaust fan filter', category_id: summer_interior.id, user_id: nil, estimated_cost: 0)

grout = Maintenance.create(name: 'Seal tile grout', category_id: summer_interior.id, user_id: nil, estimated_cost: 20)

dishwasher = Maintenance.create(name: 'Check dishwasher for leaks', category_id: summer_interior.id, user_id: nil, estimated_cost: 0)

bathroom = Maintenance.create(name: 'Check around kitchen and bathroom cabinets and around toilets for leaks', category_id: summer_interior.id, estimated_cost: 0)

chimney_inspection = Maintenance.create(name: 'Chimney inspection', category_id: inspections.id, estimated_cost: 360)

roof_inspection = Maintenance.create(name: 'Roof Inspection', category_id: inspections.id, estimated_cost: 205)

paint_inspection = Maintenance.create(name: 'Lead-Based paint inspections', category_id: inspections.id, estimated_cost: 300)

pest_inspection = Maintenance.create(name: 'Pest, termite, or rodent inspection', category_id: inspections.id, estimated_cost: 100)

radon_inspection = Maintenance.create(name: 'Radon inspection', category_id: inspections.id, estimated_cost: 200)



puts '🌱 Done Seeding'