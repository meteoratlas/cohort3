import syntax
import unittest

class TestSyntax(unittest.TestCase):
    def test_test(self):
        print("the test works correctly")

    def test_var_type(self):
        self.assertEqual("This is a string", syntax.var_type("string"))
        self.assertEqual(45, syntax.var_type("INT"))
        self.assertEqual(True, syntax.var_type("boolean"))
        self.assertEqual(23.1235, syntax.var_type("FLOAT"))
        self.assertEqual([1,2,3,5], syntax.var_type("lIsT"))
        self.assertEqual((1,2,3), syntax.var_type("tuple"))
        self.assertEqual(None, syntax.var_type("anything else"))
        self.assertEqual(None, syntax.var_type(None))

    def test_if_else(self):
        self.assertEqual("num is one", syntax.if_else(1))
        self.assertEqual("num is two", syntax.if_else(2))
        self.assertEqual("num is neither one or two", syntax.if_else([1,2]))
        self.assertEqual("num is neither one or two", syntax.if_else(None))

    def test_add_front(self):
        self.assertEqual([3,1,2], syntax.add_front([1,2], 3))
        self.assertEqual([[1,2],1,2], syntax.add_front([1,2], [1,2]))
        self.assertEqual([None], syntax.add_front([], None))
        self.assertEqual(12, syntax.add_front(12, "string"))

    def test_add_back(self):
        self.assertEqual([1,2,3], syntax.add_back([1,2], 3))
        self.assertEqual([1,2,[1,2]], syntax.add_back([1,2], [1,2]))
        self.assertEqual([None], syntax.add_back([], None))
        self.assertEqual(12, syntax.add_back(12, "string"))

    def test_update_values(self):
        self.assertEqual([2,4,6,8], syntax.update_values(lambda x: x * 2, [1,2,3,4]))
        self.assertEqual([1.5,2,2.5], syntax.update_values(lambda x: x / 2 + 1, [1,2,3]))
        self.assertEqual([2,4], syntax.update_values(1, [2,4]))
        self.assertEqual("string", syntax.update_values(lambda x: x * 2, "string"))

    def test_for_loop(self):
        self.assertEqual("12345", syntax.for_loop(5))
        self.assertEqual("12", syntax.for_loop(2))
        self.assertEqual(None, syntax.for_loop("string"))
        self.assertEqual(None, syntax.for_loop(-5))

    def test_for_in(self):
        self.assertEqual("1234", syntax.for_in([1,2,3,4]))
        self.assertEqual("abcd", syntax.for_in(["a","b","c","d"]))
        self.assertEqual("string", syntax.for_in("string"))
        self.assertEqual(-5, syntax.for_in(-5))

    def test_while_loop(self):
        self.assertEqual("12345", syntax.while_loop(5))
        self.assertEqual("12", syntax.while_loop(2))
        self.assertEqual(None, syntax.while_loop("string"))
        self.assertEqual(None, syntax.while_loop(-5))

    def test_get_by_key(self):
        example = {"name":"Jen", "job":"typist", "salary":24}
        self.assertEqual("Jen", syntax.get_by_key("name", example))
        self.assertEqual("typist", syntax.get_by_key("job", example))
        self.assertEqual(24, syntax.get_by_key("salary", example))
        self.assertEqual("Key not in dictionary", syntax.get_by_key("age", example))
        self.assertEqual("Key not in dictionary", syntax.get_by_key(24, example))
        self.assertEqual("Object passed is not dictionary", syntax.get_by_key("job", ["name","Jen", "job","typist", "salary",24]))
        self.assertEqual("Object passed is not dictionary", syntax.get_by_key("job", 2))

if __name__ == '__main__':
    unittest.main()