function ProjectStepper() {
  const steps = ["Planning", "Development", "Testing", "Deployment"];
  const currentStep = 1; // 0-based index

  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h3 className="font-semibold mb-4">Current Project Status</h3>

      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <div key={index} className="flex-1 text-center">
            <div
              className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center text-white ${
                index <= currentStep ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              {index + 1}
            </div>

            <p className="text-sm mt-2">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectStepper;
