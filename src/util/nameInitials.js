export default function nameInitials(name) {
  const [firstName, lastName] = name.split(' ');

  const firstLetter = firstName.substring(0, 1);

  if (!lastName) {
    return {
      firstLetter,
      lastLetter: '',
    };
  }

  const lastLetter = lastName.substring(0, 1);

  return {
    firstLetter,
    lastLetter,
  };
}
