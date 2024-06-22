import { Button, Checkbox, Textarea, Label, TextInput } from 'flowbite-react';

export default function ContactForm() {
  return (
    <>
      <h1 className="mx-auto">You can fill up the form to reach out to me</h1>
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Name" />
          </div>
          <TextInput id="name" type="text" placeholder="Name" required shadow />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Email" />
          </div>
          <TextInput
            id="email2"
            type="email"
            placeholder="name@email.com"
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="mobile" value="Mobile" />
          </div>
          <TextInput
            id="mobile"
            type="number"
            placeholder="Mobile No."
            shadow
          />
        </div>
        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="comment" value="Your Message" />
          </div>
          <Textarea
            id="comment"
            placeholder="Leave a comment..."
            required
            rows={4}
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}
