import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'

const Register = () => {
    const [open, setOpen] = useState(false)

  return (
    <>
      <a 
        href="#" 
        onClick={(e) => {
          e.preventDefault()
          setOpen(true)
        }}
        className="text-sm/6 font-semibold text-teal-600"
      >
        Registro
      </a>

      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />

        <div className="fixed inset-0 z-10 flex items-center justify-center w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:max-w-lg w-full flex flex-col items-center justify-center"
              style={{ width: '400px', height: '450px' }}
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 flex flex-col items-center">
                <h1 className="font-bold text-center text-2xl mb-10">Vestibulados</h1>
                <div className="sm:flex sm:items-start">
                 
                  <div className="mt-3 text-center sm:mt-0">
                    <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                      Registro
                    </DialogTitle>
                    <div className="mt-10 w-full sm:max-w-sm">
                      <form action="#" method="POST" className="space-y-6">
                        <div>
                          <div className="mt-2">
                            <input
                              placeholder="   Email"
                              id="email"
                              name="email"
                              type="email"
                              required
                              autoComplete="email"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                            />
                          </div>
                        </div>

                        <div>
                          <div className="mt-2">
                            <input
                              placeholder='   Senha'
                              id="password"
                              name="password"
                              type="password"
                              required
                              autoComplete="current-password"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="mt-2">
                            <input
                              placeholder='   Confirme a Senha'
                              id="password"
                              name="password"
                              type="password"
                              required
                              autoComplete="current-password"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                            />
                          </div>
                        </div>
                        <div>
                          <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                            Sign in
                          </button>
                        </div>
                        <div>
                          <a href="/" className=''>
                            <p>Tem uma conta? Fala o login</p>
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default Register