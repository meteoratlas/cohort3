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

if __name__ == '__main__':
    unittest.main()