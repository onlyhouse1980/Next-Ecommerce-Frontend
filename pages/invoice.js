<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="sender"
                  >
                    Your email address
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="sender"
                    name="sender"
                    type="email"
                    required
                    placeholder="Who is this invoice from? (required)"
                    // onChange={handleInputChange}
                  />
                  <label
                    className="block text-gray-700 text-sm font-bold my-3"
                    htmlFor="billTo"
                  >
                    Bill To
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="billTo"
                    name="billTo"
                    type="email"
                    required
                    placeholder="Who is this invoice to? (required)"
                    // onChange={handleInputChange}
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="shipTo"
                  >
                    Ship To
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="shipTo"
                    name="shipTo"
                    type="email"
                    required
                    placeholder="Client's email"
                    // onChange={handleInputChange}
                  />
                </div>
              </form>
