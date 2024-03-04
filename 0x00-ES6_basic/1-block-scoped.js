export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    const newTask = true; // Declare a new variable inside the block
    const newTask2 = false; // Declare a new variable inside the block

    // Reassign the outer variables using the new ones
    task = newTask;
    task2 = newTask2;
  }

  return [task, task2];
}
